({
    appDir: "./src/javascript",
    baseUrl: ".",
    dir: "disc",
    mainConfigFile: './src/javascript/config.js',
    removeCombined: true,
    modules: [
        {
            name: "main"
        }
    ],
    paths: {
        angular: 'empty:',
        jquery: 'empty:',
        ngGrid: 'empty:',
        uiBootstrap:'empty:',
        q: 'empty:',
        ngRoute: 'empty:',
        text:'../../node_modules/requirejs-text/text',
        template:'../template'
    }
})