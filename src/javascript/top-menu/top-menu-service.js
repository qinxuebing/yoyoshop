define([], function () {
    'use strict';

    return function () {
       this.currentMenu = '';
        this.setCurrentMenu = function(currentMenu){
            this.currentMenu = currentMenu;
            console.log('in top menu service:',this.currentMenu);
        }
        this.getCurrentMenu = function(){
            return this.currentMenu;
        };
    }
});