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
                'javascript/directive/yoyoshop-directive',
                'javascript/service/local-storage-service',
                'javascript/directive/image-directive'
            ], function (productDirective,
                         ProductService,
                         shoppingCartDirective,
                         yoyoshopDirective,
                         LocalStorageService,
                         imageDirective
                ) {
                app.directive('product',productDirective);
                app.directive('shoppingCart',shoppingCartDirective);
                app.directive('yoyoshop',yoyoshopDirective);
                app.directive('imageDirective',imageDirective);
                app.service('productService',['$http',ProductService]);
                app.service('localstorageService',['$document',LocalStorageService]);
                angular.bootstrap(document, ['app']);
            });
        };

        var app = angular.module('app', ['ui.bootstrap','ui.grid']);
        initialize(app);
    });

