define([], function () {
    'use strict';

    return function () {
      var currentMenu = '';
        var isOpened = false;
        var listeners = [];

        this.addListener = function(callback){
            listeners.push(callback);
        };

        this.trigger = function(currentMenuParam,isOpenParam){
            var olderMenu = currentMenu;
            currentMenu = currentMenuParam;
            isOpened = isOpenParam;
            listeners.forEach(function(callback){
                if(typeof callback === 'function'){
                    callback(currentMenu,olderMenu,isOpened);
                }
            })
        };


    }
});