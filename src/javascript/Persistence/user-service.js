define([
    'q'
], function (q) {
    'use strict';

    return function ($http) {
        this.http = $http;
        this.createUser = function () {
            var defer = q.defer();
            return this.http.get('/user/create')
                .success(function (data) {
                    console.log('create user success',data);
                    defer.resolve(data);
                }).error(function () {
                    console.log('create user fail');
                });

            return defer.promise;
        };

    }
});