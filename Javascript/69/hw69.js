/* global google */

function initMap() {
  'use strict';

 function getLoc(lat, lng){
     let loc = {lat: parseFloat(lat), lng: parseFloat(lng)};
     return loc;
 }

  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.595, lng: 25.821666666666665},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  const infoWindow = new google.maps.InfoWindow();

  function setCenter(loc){
  map.panTo(loc);
    }

  $.getJSON(`http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=mfried&type=json`)
  .then(data => {
    data.geonames.forEach(elem =>{
        let marker = new google.maps.Marker({
            position: getLoc(`${elem.lat}`, `${elem.lng}`), 
            map: map,
            animation: google.maps.Animation.DROP,
            title: `${elem.title}`,
            icon: {
              url: `${elem.thumbnailImg}`,
              scaledSize: new google.maps.Size(50, 50)
            }
        });
            const sBar = $("#sidebar");
            $(`<div>${elem.title}
            <img src="${elem.thumbnailImg}"></div>`)
         .appendTo(sBar)
        .click(function() { 
            setCenter(getLoc(`${elem.lat}`, `${elem.lng}`));
        });    
       
        marker.addListener('click', () => {
                infoWindow.setContent(`${elem.summary}
                  <a target="_blank" href=https://${elem.wikipediaUrl}>more info</a>
                `);
                infoWindow.open(map, marker);
              });
          }); 
  })
  .catch(e => console.error(e));
}
