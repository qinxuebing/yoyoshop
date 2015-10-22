define([
    'directive/product-directive',
    'service/product-service',
    'directive/shopping-cart-directive',
    'directive/yoyoshop-directive',
    'service/local-storage-service',
    'directive/image-directive',
    'login/login-directive'
], function (productDirective,
             ProductService,
             shoppingCartDirective,
             yoyoshopDirective,
             LocalStorageService,
             imageDirective,
             loginDirective
) {

    return function(app){
        app.directive('product',productDirective);
        app.directive('shoppingCart',shoppingCartDirective);
        app.directive('yoyoshop',yoyoshopDirective);
        app.directive('imageDirective',imageDirective);
        app.directive('login',loginDirective);
        app.service('productService',['$http',ProductService]);
        app.service('localstorageService',['$document',LocalStorageService]);
        angular.bootstrap(document, ['app']);
    }

});