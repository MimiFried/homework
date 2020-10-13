(function () {
    'use strict';
    
   /* $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=shofar&format=json&jsoncallback=?')
    .then(pictureData => {
      console.log(pictureData);
    })
    .catch(e => console.error(e));*/
    $('#searchBtn').click(() => {
      var searchBar = $('#search').val();

    $.ajax({
      url: `https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchBar}&format=json&jsoncallback=foo`,
      dataType: 'jsonp',
      jsonpCallback: 'foo'
    })
      .done(x => {
       x.items.forEach(element => {
        $(`<div class="pics">
        <h3 class="title">${element.title}</h3>
        <img src="${element.media.m}">
        </div>`)
          .appendTo(document.body);
       });
      });
    });
}());