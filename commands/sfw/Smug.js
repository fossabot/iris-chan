//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Smug extends Iris_command {
    constructor(client) {
      super(client, {
        name: "smug",
        description: "image 'fier de sois'",
        usage: "Ismug",
        nsfw: false,
      });
    }
  
    async run(message) {
        var nekos = await Object.assign(neko.sfw.hug());
        message.channel.send({ embed: {
            image: {
                url: nekos.url,
            },
        }})
    };
  };
  
  module.exports = Smug;