define([
    'q',
], function (q) {
    'use strict';

    return function (scope) {
        console.log('register controller');
        this.scope = scope;
    };
});