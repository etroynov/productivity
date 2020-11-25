import { createReducer } from 'redux-act';

import { usersActions } from '../actions';

import { State, User } from '../typings';

const initialState: State<User> = {
  loading: false,
  data: [],
};

export const users = createReducer({
  [usersActions.requestUsers]: (state) => ({ ...state, loading: true }), 
  [usersActions.receiveUsers]: (state, data) => ({ ...state, data, loading: false }),
}, initialState);
