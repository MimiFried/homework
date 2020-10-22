/* global google*/
(function () {
    'use strict';
  
    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: lakewood,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  
    const placesList = $('#sidebar ul');
    const tagInput = $("#tag");
    const rowsInput = $("#rows");
    const infoWindow = new google.maps.InfoWindow({ maxWidth: 500 });
  
    $('#searchform').submit(e => {
      e.preventDefault();
  
      fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=<your user name here>&type=json`)
        .then(r => {
          if (!r.ok) {
            throw new Error(`${r.status} ${r.statusText}`);
          }
          return r.json();
        })
        .then(wikiData => {
          console.log(wikiData);
  
          const bounds = new google.maps.LatLngBounds();
  
          wikiData.geonames.forEach(place => {
            const marker = new google.maps.Marker({
              position: { lat: place.lat, lng: place.lng },
              map: map,
              animation: google.maps.Animation.DROP,
              title: place.title,
              icon: place.thumbnailImg ? {
                url: place.thumbnailImg,
                scaledSize: new google.maps.Size(50, 50)
              } : null
            });
  
            const placeElem = $(`<li>
              <img src="${place.thumbnailImg || 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png'}" alt="${place.title}">
              <span class="title">${place.title}</span>
              <div class="summary">${place.summary}</div>
            </li>`)
              .appendTo(placesList)
              .click(() => {
                const b = map.getBounds();
                b.extend(marker.position);
                map.fitBounds(b);

                setTimeout(() => {
                  map.panTo(marker.position);
                  setTimeout(() => map.setZoom(18), 1000);
                }, 1000);
  
                placeSelected();
              });
  
            function placeSelected() {
              infoWindow.setContent(`${place.summary}<hr>
                <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>`);
              infoWindow.open(map, marker);
              $('.summary').slideUp('slow');
              placeElem.find('.summary').slideDown('slow');
            }
  
            marker.addListener('click', () => {
              placeSelected();
            });
  
            bounds.extend(marker.position);
          });
  
          map.fitBounds(bounds);
        })
        .catch(e => alert(e.message));
    });
  
    //////////////////////////////////////
    let drawings = [];
  
    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);
  
    google.maps.event.addListener(drawingManager, 'markercomplete', event => {
        drawings.push({type: 'marker', position: event.position});
        localStorage.drawings = JSON.stringify(drawings);
    });
  
    google.maps.event.addListener(drawingManager, 'circlecomplete', event => {
      drawings.push({type: 'circle', center: event.center, radius: event.radius});
      localStorage.drawings = JSON.stringify(drawings);
    });
  

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', event => {
        drawings.push({ type: 'rectangle', bounds: event.getBounds() });
        localStorage.drawings = JSON.stringify(drawings);
      });
    
      google.maps.event.addListener(drawingManager, 'polylinecomplete', event => {
        drawings.push({ type: 'polyline', path: event.getPath().getArray() });
        localStorage.drawings = JSON.stringify(drawings);
      });
    
      google.maps.event.addListener(drawingManager, 'polygoncomplete', event => {
        drawings.push({ type: 'polygon', path: event.getPath().getArray() });
        localStorage.drawings = JSON.stringify(drawings);
      });
  if (localStorage.drawings){
      drawings = JSON.parse(localStorage.drawings);
      drawings.forEach(drawing => {
        if (drawing.type ==='circle') {
            new google.maps.Circle({
                map: map,
                center: drawing.center,
                radius: drawing.radius
              });
        }
        else if (drawing.type ==='marker') {
            new google.maps.Marker({
                position: drawing.position,
                map: map,
                animation: google.maps.Animation.DROP
                });
          }
          else if (drawing.type ==='polygon') {
            new google.maps.Polygon({
                map: map,
                path: drawing.path
                });
          }
          else if (drawing.type ==='polyline'){
          new google.maps.Polyline({
            map: map,
            path: drawing.path
          });
        }
        else{
            new google.maps.Rectangle({
                map: map,
                bounds: drawing.bounds
              });
        }
  });
  
}
}());
  