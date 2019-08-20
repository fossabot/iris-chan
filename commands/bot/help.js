//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Iris_command } = require("../../src");
const { MessageEmbed } = require('discord.js');

class Help extends Iris_command {
    constructor(client) {
        super(client, {
            name: "help",
            usage: "Ihelp",
            nsfw: false,
            category: "bot"
        });
    }

    async run(message, args) {
        const { commands } = this.client;
        const sizeBot = commands.filter(g => g.help.category == 'bot').size;
        const sizeSfw = commands.filter(g => g.help.category == 'sfw').size;
        const sizeNsfw = commands.filter(g => g.help.category == 'nsfw').size;

        message.channel.send({
            embed: {
                title: "page d'aide",
                color: this.client.colorEmbed(this.client.color),
                description: `Salut, je m'appelle ${this.client.username} \nJe suis un lewd bot :3 \nVoici ma liste de commande \n **prefix**: ${this.client.prefix}`,
                fields: [
                    {
                        name: `Bot [${sizeBot}]`,
                        value: commands.filter(g => g.help.category == 'bot').map(command => command.help.name).join(', '),
                        inline: false
                    },
                    {
                        name: `Sfw [${sizeSfw}]`,
                        value: commands.filter(g => g.help.category == 'sfw').map(command => command.help.name).join(', '),
                        inline: false
                    },
                    {
                        name: `Nsfw [${sizeNsfw}]`,
                        value: commands.filter(g => g.help.category == 'nsfw').map(command => command.help.name).join(', '),
                        inline: false
                    }
                ],
                timestamp: new Date()
            }
        });
        message.channel.send({
            embed: {
                title: 'Lien utile',
                fields: [
                    {
                        name: 'Serveur support',
                        value: 'https://discord.gg/rnPQtGT',
                        inline: false,
                    },
                    {
                        name: 'github',
                        value: 'https://github.com/Shaynlink/iris-chan',
                        inline: false,
                    },
                    {
                        name: 'Doc github',
                        value: ' https://shaynlink.github.io/iris-chan/',
                        inline: false
                    }
                ],
                timestamp: new Date(),
            }
        });
    };
};

module.exports = Help;