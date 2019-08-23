# Iris-chan
![GitHub All Releases](https://img.shields.io/github/downloads/Shaynlink/iris-chan/total) ![Discord](https://img.shields.io/discord/612430086624247828?label=Iris-chan%20discord) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/Shaynlink/iris-chan/master?label=Iris-chan%20version)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FShaynlink%2Firis-chan.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FShaynlink%2Firis-chan?ref=badge_shield)

Iris-chan est un lewd bot pour un événement de gCKn.
- [serveur support](https://discord.gg/rnPQtGT)
- [doc github](https://shaynlink.github.io/iris-chan/)
- [issue](https://github.com/Shaynlink/iris-chan/issues)

## Installation

Le bot utilise [nodeJS](https://nodejs.org/en/), télécharger Iris-chan avec git.

```bash
git clone https://github.com/Shaynlink/iris-chan.git
```


use npm

```bash
npm i
```
use yarn
```
yarn
```
## Utilisation
- prefix: I
- commande help: Ihelp
ajouter un fichier [settings.json](https://github.com/Shaynlink/iris-chan/blob/master/settings.exemple.json )
```json
{
    "token" : "token",
    "idWebhook" : "id webhook discord",
    "tokenWebhook" : "token webhook discord"
}
```
modifier les options du client
```js
Iris_chan({
    token:
    pathCommand:
    prefix:
    debug: 
    color:
}, {
     options client: https://discord.js.org/#/docs/main/stable/typedef/ClientOptions
});
```
modification plus importante dans [Client](https://github.com/Shaynlink/iris-chan/blob/master/src/client/client.js);

### modifier les événement
- [message](https://github.com/Shaynlink/iris-chan/blob/master/src/client/client.js#L68)
- [ready](https://github.com/Shaynlink/iris-chan/blob/master/src/client/client.js#L89)
- [message du webhook](https://github.com/Shaynlink/iris-chan/blob/master/src/client/client.js#L91)

## Contribution
developpeur: Shaynlink

credit:
- [discord.js](https://discord.js.org/#/)
- [nodeJS](https://nodejs.org/en/)
- [nekos life](https://nekos.life/)
## License

[MIT](https://choosealicense.com/licenses/mit/)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FShaynlink%2Firis-chan.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FShaynlink%2Firis-chan?ref=badge_large)