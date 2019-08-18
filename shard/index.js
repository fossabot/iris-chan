//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//importe les modules necessaire
const { ShardingManager } = require('discord.js');
const { sep } = require('path');
const { logger } = require('./../src/Utile/Utile');

/**
 * @typedef {ConstructorParameters} ShardingManager
 * @param {string, Object} ShardingManager
 */
const sharder = new ShardingManager(`${process.cwd()}${sep}main.js`, {
    totalShards: 'auto',
    shardList: 'auto',
    mode: 'process',
    respawn: true,
    token: require(`${process.cwd()}${sep}settings.json`).token
});

sharder.spawn(this.totalShards, 25000, false);

sharder.on('launch', shard => {
  logger(`${shard.id} est lancée.`)
});

setTimeout(() => {
    logger("redémarrage..")
    sharder.broadcastEval("process.exit()");
}, 21600000); //6h