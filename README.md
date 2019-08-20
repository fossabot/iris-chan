# Iris-chan

Iris-chan est un lewd bot pour un événement de gCKn.

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
## Contribution
developpeur: Shaynlink

credit:
- [discord.js](https://discord.js.org/#/)
- [nodeJS](https://nodejs.org/en/)
- [nekos life](https://nekos.life/)
## License
[MIT](https://choosealicense.com/licenses/mit/)