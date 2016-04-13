define([], function () {
    return function (scope, service) {
        scope.header='login';
        scope.isOpened=false;
        scope.clickTopMenu = function(){
            console.log("click top menu");
            scope.isOpened = ! scope.isOpened;
            service.trigger(scope.header, scope.isOpened);
        }
    };
});