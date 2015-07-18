requirejs.config({
    baseUrl: '/',
    paths: {
        angular: 'angular',
        jquery: 'jquery',
        ngGrid: 'ui-grid',
        q: 'q',
        text:'text'
    }
});

requirejs(['jquery',
        'angular',
        'ngGrid',
        'text'
    ],
    function () {
        'use strict';

        function initialize(app) {
            require(['javascript/directive/product-directive',
                'javascript/service/product-service'
            ], function (productDirective,ProductService) {
                app.directive('product',productDirective);
                app.constant('productService',new ProductService());



                angular.bootstrap(document, ['app']);
            });
        };


        var app = angular.module('app', ['ui.grid']);

        initialize(app);

        //app.directive('category', function () {
        //    return {
        //        scope: {},
        //        restrict: 'E',
        //        template: '<div ui-grid="gridOptions"></div>',
        //        controller: ['$scope', '$http', function ($scope, $http) {
        //            $scope.gridOptions = {
        //                enableSorting: true,
        //                columnDefs: [
        //                    {field: 'firstName'},
        //                    {field: 'lastName'},
        //                    {field: 'company'},
        //                    {field: 'employed'}
        //                ],
        //                onRegisterApi: function (gridApi) {
        //                    $scope.grid1Api = gridApi;
        //                }
        //            };
        //
        //            $http.get('/data/100.json')
        //                .success(function (data) {
        //                    console.log('data', data);
        //                    $scope.gridOptions.data = data;
        //                }).error(function () {
        //                    console.log('get data fail');
        //                });
        //        }]
        //
        //    }
        //});


    });

