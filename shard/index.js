//utilisation du mode stricte pour être compatible avec les autres versions
'use strict';

//Importe les modules necessaires
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} en cours`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  const worker = cluster.fork();
  /**
   * 
   * @param {number} [code] code de l'evenement exit
   * @param {string} [signal] message de l'evenement exit
   */
  worker.on('exit', (code, signal) => {
  if (signal) {
    console.log(`le worker est mort avec le signal: ${signal}`);
  } else if (code !== 0) {
    console.log(`le woker à quitté avec l'erreur: ${code}`);
  } else {
    console.log('worker success!');
  }
});

    /**
   * 
   * @param {Object} [worker]
   * @param {number} [code] code de l'evenement exit
   * @param {string} [signal] message de l'evenement exit
   */
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} mort`);
  });

  /**
   * 
   * @param {number} [address] adresse du serveur
   * @warning Iris-chan n'emet pour l'instant pas de serveur donc l'evenement 'listening' n'est pas utilisé
   */
  cluster.fork().on('listening', (address) => {
    console.log('listen '+ address);
  });
  cluster.fork().on('online', () => {
    require('./../main');
  });
} else {
  console.log(`Worker ${process.pid} started`);
}