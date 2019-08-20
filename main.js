/**
 * 
* Pour démarrer le bot en mode public:
* @exemple npm: npm run public
* @exemple yarn: yarn public
* @exemple node: node ./shard/index.js
* @exemple pm2: pm2 start ./shard/index.js --name="Iris-chan"
*/

/**
 * 
* Warning: Vous ne pouvez pas démarré Iris-chan depuis se fichier, Veillez respecté les exemples ci-dessus.
* Mode Public: 
*   debug: false;
*   shard: true;
*   webhook: false;
*
* Iris-chan utilise les permission 19456
* @exemple ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS']
*
*
* C'est parametres sont modifiable depuis les options du client.
* @example
*  const client = new Iris_chan({
*    token: token,
*    pathCommand: `${process.cwd()}${sep}commands`,
*    prefix: 'I',
*    debug: true,
*
*   }, {
*    messageCacheMaxSize: -1,
*    fetchAllMembers: true,
*    disableEveryone: true,
*}  );
*/

/*
*
* Credit: [discord.js]{https://discord.js.org}
*/

//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importe les modules necessaires
const { Iris_chan } = require("./src");
const { token } = require("./settings.json");
const { sep } = require("path");
const { errorResolver } = require('./src/Utile/Utile');

/**
 * 
 * @param {Object} [Iris_chan] Iris_chan options
 * @param {Object} [Client] Discord.js options 
 */
const client = new Iris_chan({
    token: token,
    pathCommand: `${process.cwd()}${sep}commands`,
    prefix: '*',
    debug: false
    //color:
}, {
        messageCacheMaxSize: -1,
        fetchAllMembers: true,
        disableEveryone: true,
    });

//connection à l'api de discord et start ready & debug event
client.login();
//Chargement des commands et start l'evenement message
client.loading();

//En cas de rejet d'une promesse
process.on('unhandledRejection', async err => {
    errorResolver(`Rejet d'un promesse: ${err}`, 'exitWithType', 1);
});
// En cas d'erreur inattendu
process.on('uncaughtException', async err => {
    if (err.code == 'ECONNRESET') errorResolver(`Ce n'est probablement pas une erreur`, "error", 2);
    errorResolver(err, "exitWithType", 1)
});
process.on('rejectionHandled', async err => {
    errorResolver(err, 'exit', 0);
});