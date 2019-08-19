//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

/**
* Pour démarrer le bot en mode public:
* npm: npm run public
* yarn: yarn public
* node: node ./shard/index.js
* pm2: pm2 start ./shard/index.js --name="Iris-chan"
*/

/**
* Pour démarrer el bot en mode test:
* npm: npm run dev
* yarn: yarn dev
* node: node ./test/main.js
* pm2: pm2 start ./test/main.js --name="Iris-chan dev"
*/

const { Iris_chan } = require("./../src");
const { token } = require("./../settings.json");
const { sep } = require("path");

const client = new Iris_chan({
    token: token,
    pathCommand: `${process.cwd()}${sep}commands`,
    prefix: 'I',
    debug: true
}, {
        messageCacheMaxSize: -1,
        fetchAllMembers: true,
        disableEveryone: true,
    });

client.login();
client.loading();