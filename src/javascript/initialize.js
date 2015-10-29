define([
    'product/product-directive',
    'persistence/product-service',
    'shopping-cart/shopping-cart-directive',
    'yoyoshop/yoyoshop-directive',
    'persistence/local-storage-service',
    'common/image-directive',
    'login/login-directive',
    'register/register-directive'
], function (productDirective,
             ProductService,
             shoppingCartDirective,
             yoyoshopDirective,
             LocalStorageService,
             imageDirective,
             loginDirective,
             registerDirective
) {

    return function(app){
        app.directive('product',productDirective);
        app.directive('shoppingCart',shoppingCartDirective);
        app.directive('yoyoshop',yoyoshopDirective);
        app.directive('imageDirective',imageDirective);
        app.directive('login',loginDirective);
        app.directive('register',registerDirective);
        app.service('productService',['$http',ProductService]);
        app.service('localstorageService',['$document',LocalStorageService]);
        angular.bootstrap(document, ['app']);
    }

});