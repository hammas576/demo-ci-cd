import HrRouter from './core/modules/router/index';

export default function routes(app) {
  app.use('/api/hr', HrRouter);
}
