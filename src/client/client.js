//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importé les modules nécessaire
const { Client, Collection } = require('discord.js');
const { errorResolver, logger, colorResolver } = require('../Utile/Utile');
const { sep, parse } = require('path');
const klaw = require('klaw');

/**
 * 
 * @typedef {Object} Iris_chan Options
 */
class Iris_chan {
    /**
     * 
    * @param {Client Options} [client]  Options du client
    * @param {Iris_chan Options} [options] Options de Iris_chan
    */
    constructor(options = {}, client = {}) {
        /**
         * 
         * @param {Client} [client] Options du client inclue dans la class
         */
        this.client = new Client(client);
        this.commands = new Collection();
        this.aliases = new Collection();
        const { token = '', pathCommand = `${process.cwd()}${sep}commands`, prefix = '!', debug = false, color = "#FF33BB" } = options
        this.token = token;
        this.pathCommand = pathCommand;
        this.prefix = prefix;
        this.settings = require(`${process.cwd()}${sep}settings.json`);
        this.debug = debug;
        this.logger = logger;
        this.color = color;
    };
    /**
     * 
     * @param {string} commandPath 
     * @param {string} commandName 
     */
    loadCommand(commandPath, commandName) {
        try {
            const props = new (require(`${commandPath}${sep}${commandName}`))(this);
            this.logger(`Chargement de la commande: ${props.help.name}`);
            props.help.location = commandPath;
            if (props.init) {
                props.init(this);
            }
            this.commands.set(props.help.name, props);
            return false;
        } catch (e) {
            this.logger(e)
            return this.logger(false, `Impossible de charger la commande ${commandName}: ${e}`);
        }
    }
    /**
     * 
     * @param {string} params 
     */
    loading(params = this.pathCommand) {
        klaw(params).on("data", item => {
            const cmdFile = parse(item.path);
            if (!cmdFile.ext || cmdFile.ext !== ".js") return;
            const response = (this.loadCommand(cmdFile.dir, `${cmdFile.name}${cmdFile.ext}`));
            if (response) this.logger(false, response);
        });
        this.client.on('message', message => {
            if (message.author.bot) return;
            if (message.content.indexOf(this.prefix) !== 0) return;
            const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const cmd = this.commands.get(command);
            if (!cmd) return this.logger(false, `La commande n'existe pas`);
            if (cmd.help.nsfw) {
                if (!message.channel.nsfw) return message.channel.send(`Le salon n'est pas approprié pour du nsfw !`);
            }
            this.logger(`${message.author.username} lance la commande ${cmd.help.name}`);
            cmd.run(message, args);
        })
    }
    login() {
        let token = this.token;
        if (token === '') errorResolver('Le token est invalide', 'exitWithType', 1);
        this.client.login(token).catch(e => {
            errorResolver(`Le token est invalide: ${e}`, 'exitWithType', 1);
        });
        if (this.debug) this.client.on('debug', console.log);
        this.client.on('ready', () => {
            this.logger('Iris-chan est ready');
            this.client.user.setActivity('Ihelp', { type: 'PLAYING' });
            this.client.fetchWebhook(this.settings.idWebhook, this.settings.tokenWebhook).then(webhook => {
                this.logger(`Obtained webhook with name: ${webhook.name}`);
                webhook.send(`Iris-chan est prêt`)
            });
        });
    }
    colorEmbed(data) {
        return colorResolver(data);
    }
};

module.exports = Iris_chan;