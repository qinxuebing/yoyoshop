define([
     'q'
], function (q) {
    return function ($http) {
        this.http = $http;
        this.getProducts = function () {
            var defer = q.defer();
            return this.http.get('data/dress.json')
                .success(function (data) {
                    defer.resolve(data);
                }).error(function () {
                    console.log('get data fail');
                });

          return defer.promise;

        }
    }
});