window.myApp = window.myApp || {};

window.myApp.utils = (function (utils){
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    
        utils.getDayName = (index) => console.log(days[index-1]);
        
        utils.getDayNumber = (name) => days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) +1;
        
    
    return utils;

}(window.myApp.utils || {}));