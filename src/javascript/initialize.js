define([
    'product/product-directive',
    'persistence/product-service',
    'shopping-cart/shopping-cart-directive',
    'yoyoshop/yoyoshop-directive',
    'persistence/local-storage-service',
    'top-menu/top-menu-service',
    'common/image-directive',
    'login/login-directive',
    'register/register-directive',
    'top-menu/top-menu-directive',
    'app-route',
    'home-page/home-page-directive'
], function (productDirective,
             ProductService,
             shoppingCartDirective,
             yoyoshopDirective,
             LocalStorageService,
             TopMenuService,
             imageDirective,
             loginDirective,
             registerDirective,
             topMenuDirective,
             appRoute,
             homePageDirective
) {

    return function(app){
        app.config(['$routeProvider',appRoute]);
        app.directive('product',productDirective);
        app.directive('shoppingCart',shoppingCartDirective);
        app.directive('yoyoshop',yoyoshopDirective);
        app.directive('imageDirective',imageDirective);
        app.directive('login',loginDirective);
        app.directive('register',registerDirective);
        app.directive('topMenu',topMenuDirective);
        app.directive('homePage',homePageDirective);
        app.service('productService',['$http',ProductService]);
        app.service('localstorageService',['$document',LocalStorageService]);
        app.service('topMenuService',TopMenuService);
        angular.bootstrap(document, ['app']);
    }

});