define([

],function(){
    return function(scope,$location,$route,topMenuService){
        $location.path("/login");

        topMenuService.addListener(function(newValue,olderValue,isOpened){
            scope.$apply(function(){
                if(newValue){
                    $location.path("/"+newValue);
                }
                scope.isMask=isOpened;
            });
        });

    }
});