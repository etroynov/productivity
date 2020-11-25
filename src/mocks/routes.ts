import { auth, users } from './controllers';

export const routes = [
  auth.login,

  users.index,
];
