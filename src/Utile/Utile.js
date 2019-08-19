//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importation des modules necessaire
const fs = require('fs');
const { sep } = require('path');
const { Console } = require('console');
//const output = fs.createWriteStream(`${process.cwd()}${sep}data${sep}stdout.log`);
//const errorOutput = fs.createWriteStream(`${process.cwd()}${sep}data${sep}stderr.log`);

module.exports = {
    /**
     * 
     * @param {any} err message de l'erreur 
     * @param {string} type Type d'erreur
     * @param {number} code Code d'erreur associé au typeError
     * @returns {}
     */
    errorResolver(err, type, code) {
        if (!err || !code) process.exit;
        let content = `Une erreur est survenue, error message: \n${err},\nCode: ${code}`;
        if (type === "exit" || code === 0) {
            throw content;
        } else if (type === "exitWithType" || code === 1) {
            throw TypeError(err);
        } else if (type === "error" || code === 2) {
            logger(false, content);
        }
    },
    /**
     * 
     * @param {any} content 
     * @param {any} errData 
     */
    logger(content = '', errData = '') {
        //const logger = new Console({ stdout: output, stderr: errorOutput });
        console.log(content, errData)
        //logger.log(content, errData);
    },
    colorResolver(data){
        const { resolveColor } = require('./../core/dataResolver.js');
        var color = resolveColor(data);
        return color;
      }
}