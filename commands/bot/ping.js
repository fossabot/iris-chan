//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");

class Ping extends Iris_command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "renvoie ping",
      usage: "Iping",
      nsfw: false,
    });
  }

  run(message) {
    message.channel.send('Ping !');
    this.client.logger('log', 'otherlog')
  };
};

module.exports = Ping;