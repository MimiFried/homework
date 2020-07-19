window.myApp = window.myApp || {};

window.myApp.utils = (function (utils){
    'use strict';

   utils.stringCaseInsensitiveEquals = (a, b) => a.toLowerCase() === b.toLowerCase();
    
   return utils;

}(window.myApp.utils || {}));