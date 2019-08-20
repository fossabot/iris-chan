//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class RandomHentaiGif extends Iris_command {
  constructor(client) {
    super(client, {
      name: "randomHentaiGif",
      description: "image 'randomHentaiGif'",
      usage: "IrandomHentaiGif",
      nsfw: true,
      category: "nsfw"
    });
  }

  async run(message, args) {
    var nekos = await Object.assign(neko.nsfw.randomHentaiGif());
    message.channel.send({
      embed: {
        color: this.client.colorEmbed(this.client.color),
        description: `${this.help.name} demandé par: ${message.author}`,
        image: {
          url: nekos.url,
        },
      }
    })
  };
};

module.exports = RandomHentaiGif;