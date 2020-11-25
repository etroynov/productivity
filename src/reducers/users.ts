import { Map } from 'immutable';
import { createReducer } from 'redux-act';
import { usersActions } from '../actions';

const initialState= Map({
  loading: false,
  data: [],
});

export const users = createReducer({
  [usersActions.requestUsers]: (state) => state.update('loading', () => true),
  [usersActions.receiveUsers]: (state, data) => state.withMutations((ctx) => ctx.set('loading', false).set('data', data)),
}, initialState);
