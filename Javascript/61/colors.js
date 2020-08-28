(function () {
    'use strict';
  
    function get(id) {
      return document.getElementById(id);
    }
  
    function setCss(element, property, value) {
      element.style[property] = value;
    }
  
    let interval;
    const theButton = get('start');
    const colorstbl = get('colorstbl').getElementsByTagName('tbody')[0];
    const now = new Date();

    let r = 0;
    let g = 0;
    let b = -1;
  
    const INCREMENT = 50;
  
    function startColors() {
      interval = setInterval(() => {
  
        b += INCREMENT;
        if (b >= 256) {
          b = 0;
  
          g += INCREMENT;
          if (g >= 256) {
            g = 0;
  
            r += INCREMENT;
            if (r >= 256) {
              r = 0;
            }
          }
        }
  
        setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
        setCss(document.body, 'color', `rgb(${b},${g},${r})`);
        
        addToTable(now.toLocaleString(),`rgb(${r},${g},${b})`); 

        theButton.innerHTML = 'stop';
      }, 1000);
    }
  
    function stopColors() {
      clearInterval(interval);
      interval = null;
      theButton.innerHTML = 'start';
    }
  
    function addToTable(time, color){
        const row = colorstbl.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = time;
        cell2.innerHTML = color;

        row.addEventListener('click', function(){
            stopColors();
            document.setCss(document.body, 'backgroundColor', color);
        });
    }


    // within event callback, this is domElement event was on - if not arrow function
    get('start').addEventListener('click', function () { 
      if (!interval) {
        startColors();

      } else {
        stopColors();
      }
    });

   
  }());