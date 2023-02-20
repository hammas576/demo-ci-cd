import Server from './config/server';
import './config/env';
import routes from './router';

const main = async () => {
  const server = new Server().router(routes);
  server.listen(process.env.PORT);
};

main();
