define([
    'text!top-menu/top-menu.html',
    'top-menu/top-menu-controller'
],function(template,controller){
    var topMenuDirective = function(){
        return{
            restrict:'E',
            replace:true,
            scope:{
                header:"="
            },
            template:template,
            controller:['$scope','topMenuService', controller],
            link:function(scope,element,attr,ctrl){
                scope.ctrl = ctrl;

                var items = element.find('.circle a');
                for(var i = 0, l = items.length; i < l; i++) {
                    items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

                    items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
                }

                element.find('.menu-button').on("click",function(e) {
                     element.find('.circle').toggleClass('open');
                     scope.clickTopMenu();
                });

                element.find('.circle').on('click',function(e){
                    scope.header = e.target.getAttribute("value");
                    scope.clickTopMenu();
                    element.find('.circle').toggleClass('open');
                });

            }
        };
    };
    return topMenuDirective;
});