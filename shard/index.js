const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} en cours`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  const worker = cluster.fork();
  worker.on('exit', (code, signal) => {
  if (signal) {
    console.log(`le worker est mort avec le signal: ${signal}`);
  } else if (code !== 0) {
    console.log(`le woker à quitté avec l'erreur: ${code}`);
  } else {
    console.log('worker success!');
  }
});

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} mort`);
  });

  cluster.fork().on('listening', (address) => {
    console.log('listen '+ address);
  });
  cluster.fork().on('online', () => {
    require('./../main');
  });
} else {
  console.log(`Worker ${process.pid} started`);
}