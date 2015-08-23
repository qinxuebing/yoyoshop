requirejs([
        'ngGrid',
        'uiBootstrap'
    ],
    function () {
        'use strict';

        function initialize(app) {
            require(['javascript/directive/product-directive',
                'javascript/service/product-service',
                'javascript/directive/shopping-cart-directive',
                'javascript/directive/yoyoshop-directive'
            ], function (productDirective,
                         ProductService,
                         shoppingCartDirective,
                         yoyoshopDirective
                ) {
                app.directive('product',productDirective);
                app.directive('shoppingCart',shoppingCartDirective);
                app.directive('yoyoshop',yoyoshopDirective);
                app.service('productService',['$http',ProductService]);
                angular.bootstrap(document, ['app']);
            });
        };

        var app = angular.module('app', ['ui.bootstrap','ui.grid']);
        initialize(app);
    });

