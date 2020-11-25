import { createAction } from 'redux-act';

const requestLogin: any = createAction('REQUEST_LOGIN');
const receiveLogin: any = createAction('RECEIVE_LOGIN');

export const authActions = {
  requestLogin,
  receiveLogin,
}
