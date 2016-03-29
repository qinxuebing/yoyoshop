requirejs([
        'ngGrid',
        'uiBootstrap',
        'initialize',
        'ngRoute'
    ],
    function (ngGrid,uiBootstrap,initialize,ngRoute) {
        'use strict';

        var app = angular.module('app', ['ui.bootstrap','ui.grid','ngRoute']);
        initialize(app);
    });

