//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

/**
 * 
 * @typedef {Object} Command Handler
 */
class Command {
  constructor(
    client,
    {
      name = null,
      description = "Aucune description détéctée.",
      category = "Utilisateur",
      nsfw = false
    }
  ) {
    this.client = client;
    this.help = { name, description, category, nsfw };
  }
}

module.exports = Command;