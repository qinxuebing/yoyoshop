define([
     'q'
], function (q) {
    'use strict';

    return function ($http) {
        this.http = $http;
        this.getProducts = function () {
            var defer = q.defer();
            return this.http.get('/products')
                .success(function (data) {
                    console.log('get data success',data);
                    defer.resolve(data);
                }).error(function () {
                    console.log('get data fail');
                });

          return defer.promise;
        };

        this.getOrders = function(){
            var defer = q.defer();
            this.http.get('/data/100.json')
                .success(function (data) {
                    defer.resolve(data);

                }).error(function () {
                    console.log('get data fail');
                });
            return defer.promise;
        }
    }
});