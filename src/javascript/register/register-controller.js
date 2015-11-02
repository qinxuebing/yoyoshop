define([
    'q',
], function (q) {
    'use strict';

    return function (scope) {
        scope.reset = function(){

        };



        scope.submit = function(){
            console.log('form',scope.registerForm);
            if(scope.registerForm.$valid){

            }
        };

    };
});