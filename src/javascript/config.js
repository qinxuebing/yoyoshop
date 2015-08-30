requirejs.config({
    baseUrl: '/',
    paths: {
        angular: 'angular',
        jquery: 'jquery',
        ngGrid: 'ui-grid',
        uiBootstrap:'ui-bootstrap',
        q: 'q',
        text:'text',
        main:'main'
    },
    shim:{
        'angular':{
            deps:['jquery'],
            exports:'angular'
        },
        'ngGrid':{
            deps:['jquery','angular']
        },
        'uiBootstrap':{
            deps:['jquery','angular']
        }
    },
    deps: ["main"],
    callback: function(module1) {

    }
});