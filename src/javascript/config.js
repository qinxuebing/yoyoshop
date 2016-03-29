requirejs.config({
    baseUrl: '/',
    paths: {
        angular: 'angular',
        jquery: 'jquery',
        ngGrid: 'ui-grid',
        uiBootstrap: 'ui-bootstrap',
        q: 'q',
        text: 'text',
        main: 'main',
        d3: 'd3',
        ngRoute:'angular-route',
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ngGrid': {
            deps: ['jquery', 'angular']
        },
        'uiBootstrap': {
            deps: ['jquery', 'angular']
        },
        'ngRoute':{
            deps:['jquery', 'angular']
        }
    },
    deps: ["main"],
    callback: function (module1) {

    }
});