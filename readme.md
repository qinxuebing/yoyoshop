# please run follow command in git console
* npm install
* node bin/www
* start mongodb:
    * mongod --dbpath f:\data\db
    * mongoimport --db test --collection dress --drop --file \yoyoshop\src\data\db-dress.json

* visit link:http://localhost:3000/

* build js files: node node_modules/requirejs/bin/r.js -o app.build.js