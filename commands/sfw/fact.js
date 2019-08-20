//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Fact extends Iris_command {
  constructor(client) {
    super(client, {
      name: "fact",
      usage: "Ifact",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    if (!args.join(' ')) return message.channel.send(`Vous devez ajouter un argument`);
    var nekos = await Object.assign(neko.sfw.fact({ text: args.join(' ')}));
    message.channel.send(nekos.fact);
  };
};

module.exports = Fact;