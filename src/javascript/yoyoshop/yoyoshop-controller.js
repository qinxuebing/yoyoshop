define([

],function(){
    return function(scope,$location,$route){

        this.scope = scope;
        scope.$watch('header',function(newValue,olderValue){
        	console.log('route',$route);
        	if(newValue){

        		$location.path("/"+newValue);
        	}
        });
    }
});