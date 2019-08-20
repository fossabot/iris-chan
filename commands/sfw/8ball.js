//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class ball extends Iris_command {
  constructor(client) {
    super(client, {
      name: "8ball",
      usage: "I8ball",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    if (!args.join(' ')) return message.channel.send(`Vous devez ajouter un argument`);
    var nekos = await Object.assign(neko.sfw.chat({ text: args.join(' '), owo: true}));
    if (nekos.url) {
        message.channel.send(nekos.response, { Attachment: {
            url: nekos.url
        }})
    } else {
        message.channel.send(nekos.response);
    }
  };
};

module.exports = ball;