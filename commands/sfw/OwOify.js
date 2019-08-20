//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class OwOify extends Iris_command {
  constructor(client) {
    super(client, {
      name: "owoify",
      usage: "Iowoify",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    if (!args.join(' ')) return message.channel.send(`Vous devez ajouter un argument`);
    var nekos = await Object.assign(neko.sfw.OwOify({ text: args.join(' ')}));
    message.channel.send(nekos.owo);
  };
};

module.exports = OwOify;