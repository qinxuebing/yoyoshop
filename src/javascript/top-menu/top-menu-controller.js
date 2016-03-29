define([], function () {
    return function (scope, service) {
        scope.header='login';
        scope.clickTopMenu = function(){
            service.setCurrentMenu(scope.header);
        }
    };
});