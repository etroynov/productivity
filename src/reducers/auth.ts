import { Map } from 'immutable';
import { createReducer } from 'redux-act';
import { authActions } from '../actions';

const initialState = Map({
  loading: false,
  data: null,
});

export const auth = createReducer({
  [authActions.requestLogin]: (state) => state.update('loading', () => true),
  [authActions.receiveLogin]: (state, data) => state.withMutations((ctx) => ctx.set('loading', false).set('data', data)),
}, initialState);
