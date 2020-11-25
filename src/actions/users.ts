import { createAction } from 'redux-act';

const requestUsers: any = createAction('REQUEST_USERS');
const receiveUsers: any = createAction('RECEIVE_USERS');

export const usersActions = {
  requestUsers,
  receiveUsers,
}
