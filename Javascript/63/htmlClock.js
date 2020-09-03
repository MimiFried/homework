window.pcs = window.pcs || {};
window.pcs.clock = (function () {
    'use strict'; 
    
     const clock = document.createElement('div');
     document.body.appendChild(clock);
    let interval;

     function tick(){
        interval = setInterval(() => {
            clock.innerHTML = new Date().toLocaleString();
        }, 1000);
    }
    
    return {
        tick: tick
    };
}());