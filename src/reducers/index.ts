import { combineReducers } from 'redux';

import { auth } from './auth';
import { users } from './users';

export const rootReducer = combineReducers({
  users,
});
