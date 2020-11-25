import { combineReducers } from 'redux-immutable';

import { auth } from './auth';
import { users } from './users';

export const rootReducer = combineReducers({
  auth,
  users,
});
