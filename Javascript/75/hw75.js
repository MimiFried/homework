(function () {
    'use strict';
  
    const canvas = document.getElementById('theCanvas');
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  
    class Ant {
      // # experimental private so no one can change it - but makes jshint very unhappy
      // static #SIZE = 2;
  
      // js hint not ready for this experimental syntax yet
      static SIZE = 2; // jshint ignore:line
  
      constructor(context, color, d) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.dirX = 0;
        this.dirY = 0;
        this.d = d;
        this.color = color;
        this.context = context;
        this.draw();
  
        // static without using experimental syntax
        /*if (! Ant.SIZE) {
          Ant.SIZE = 2;
        }*/
      }
  
      draw() {
        this.context.beginPath();
        this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
        this.context.fillStyle = this.color;
      }
  
      move() {
        if(this.d < 1){
        this.d = Math.floor((Math.random() * 10)+1);
        console.log(this.d);
        this.dirX = Ant.getRandomNumber(-1, 1);
        this.dirY = Ant.getRandomNumber(-1, 1);
        }
        this.x += this.dirX;
        this.y += this.dirY;
        this.d--;
        if (this.x < Ant.SIZE) {
          this.x = Ant.SIZE;
        } else if (this.x > canvas.width - Ant.SIZE) {
          this.x = canvas.width - Ant.SIZE;
        }
  
        if (this.y < Ant.SIZE) {
          this.y = Ant.SIZE;
        } else if (this.y > canvas.height - Ant.SIZE) {
          this.y = canvas.height - Ant.SIZE;
        }
  
        this.draw();
        this.fight();
      }

      fight() {
        let ant1 = this;  
        ants.forEach(ant2 => {  
          if (ant1.x === ant2.x && ant1.y === ant2.y && ant1.color !== ant2.color) {
            ant1.color = ant2.color;
        }
        });
      }
  
      static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }
  
    const context = canvas.getContext('2d');
    const ants = [];
    for (let i = 0; i < 2000; i++) {
      ants.push(new Ant(context, 'blue',Math.floor((Math.random() * 10)+1)));
    }
  
    setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      ants.forEach(ant => ant.move());
    }, 100); //17);

    document.getElementById('controls').addEventListener('submit', e => {
        e.preventDefault();
    
        const colorPicker = document.getElementById('color');
        ants.push(new Ant(context, colorPicker.value,Math.floor((Math.random() * 10)+1) ));
      });

  }());