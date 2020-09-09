(function () {
    'use strict';

    let file = prompt('Enter file to load', '');
    if (file !== null) {
        const request = new XMLHttpRequest();
        request.open('GET', `${file}`);
        request.send();

        if (request.readyState < 4) {
            const popup = $('<h1>Loading...<h1>').prependTo(document.body);
            setTimeout(function () { popup.hide(); }, 100);
        }
        request.onload = () => {
            if (request.status < 400) {
                document.body.append(`${request.responseText}`);
            } else {
                document.body.append(`Error - ${request.status} ${request.statusText}`);
            }
        };

        request.onerror = e => {
            document.body.append(`Error - ', ${e}`);
        };
    }
}());