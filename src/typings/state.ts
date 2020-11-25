import { State, User } from '.';

export type AppState = {
  users: State<User>,
}