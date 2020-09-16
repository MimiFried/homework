
(function () {
    'use strict';

    const videoPlay = $('#videoPlayer');

    fetch(`videos.json`)
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(videos => {
            videos.forEach(video => {
                const videoList = $("#videoList");
                $(`<div id="${video.title}"><h2>${video.title}</h2>
                <img src="${video.pic}">`)
             .appendTo(videoList)
            .click(function() { 
                videoPlay.attr('src', `${video.url}`);
                $('#videoPlayer')[0].play();
            });    
        });
    })
        .catch(err => console.error(err)); 
                
}());