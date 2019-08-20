//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Hug extends Iris_command {
  constructor(client) {
    super(client, {
      name: "hug",
      description: "image 'hug'",
      usage: "Ihug",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    var nekos = await Object.assign(neko.sfw.hug());
    let title = true;
    var user = message.mentions.users.first();
    if (user) {
      var member = message.guild.member(user);
      if (member) title = false;
    }
    message.channel.send({
      embed: {
        title: title ? `${this.client.username} caline ${message.author.username}` : `${message.author.username} caline ${user.username}`,
        color: this.client.colorEmbed(this.client.color),
        description: `${this.help.name} demandé par: ${message.author}`,
        image: {
          url: nekos.url,
        },
      }
    })
  };
};

module.exports = Hug;