//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const client = require('nekos.life');
const neko = new client();

class Tickle extends Iris_command {
  constructor(client) {
    super(client, {
      name: "tickle",
      description: "image 'tickle'",
      usage: "Ismug",
      nsfw: false,
      category: "sfw"
    });
  }

  async run(message, args) {
    var nekos = await Object.assign(neko.sfw.tickle());
    let title = true;
    var user = message.mentions.users.first();
    if (user) {
      var member = message.guild.member(user);
      if (member) title = false;
    }
    message.channel.send({
      embed: {
        title: title ? `${message.author.username} se chatouille` : `${message.author.username} chatouille ${user.username}`,
        color: this.client.colorEmbed(this.client.color),
        description: `${this.help.name} demandé par: ${message.author}`,
        image: {
          url: nekos.url,
        },
      }
    })
  };
};

module.exports = Tickle;