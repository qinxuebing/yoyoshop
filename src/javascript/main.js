requirejs([
        'ngGrid',
        'uiBootstrap',
        'initialize'
    ],
    function (ngGrid,uiBootstrap,initialize) {
        'use strict';

        var app = angular.module('app', ['ui.bootstrap','ui.grid']);
        initialize(app);
    });

