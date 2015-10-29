define(function(){
    'use strict';

    var imageDirective = function(){
        return{
            restrict:'E',
            scope:{
                img:'='
            },
            template:'<span><img src=""></span>',
            link:function(scope,element,attr){

                var img = scope.img;
                var imgElement = element.find('img');
                imgElement.attr('id',img._id);
                if(img.isLocalStorage){
                    imgElement.attr('src', img.data);
                }else{
                    imgElement.attr('src', img.path);
                }
            }
        };
    };
    return imageDirective;
});