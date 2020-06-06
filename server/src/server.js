const Hapi = require('@hapi/hapi');

const PORT = 4000;

const HOST = 'localhost';

const startServer = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST,
    compression: {
      minBytes: 1024,
    },
    routes: {
      cors: true,
    }
  });

  await server.start();
  console.info(`The server is up and running on ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

startServer();