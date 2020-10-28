(function () {
    'use strict';
  
    let dragging;
    let offset;  

    $(document).on('mousedown', '.part', e => {
      offset = { x: e.offsetX, y: e.offsetY };
       dragging = $(e.target);
       dragging.css({position: 'absolute'});
    });
  
    $(document).mousemove(e => {
      if (dragging) {
        e.preventDefault(); 
      dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
         }
    }).mouseup(e => {
      if (dragging) {
        dragging = false;
      }
    });
  }());