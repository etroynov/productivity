import { Record } from 'immutable';
import { State, User } from '.';

export type AppState = {
  auth: Record<State<User>>;
  users: Record<State<User[]>>;
}