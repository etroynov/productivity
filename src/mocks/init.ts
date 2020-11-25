import store from 'store2';

import { seed } from './seed';

export const init = (cb: () => void) => {
  if (store.size() === 0) {
    const seeds = seed.users();
    console.info('=======START SEED======');
    store.setAll(seeds);
    console.info('=======END SEED=======');
  }

  cb();
}