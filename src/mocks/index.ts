import { setupWorker } from 'msw';
import { routes } from './routes';

import { init } from './init';

export const mocks = {
  init,
  server: setupWorker(...routes),
};
