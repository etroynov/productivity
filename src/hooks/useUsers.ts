import { useEffect } from 'react';
import { useFetch } from 'use-http';
import { useSelector, useDispatch } from 'react-redux';

import { usersActions } from '../actions';

import { AppState, State, User } from '../typings';

export function useUsers(): [User[], boolean, unknown] {
  const dispatch = useDispatch();
  const users = useSelector<AppState>(state => state.users) as State<User>;

  const { get, data, error } = useFetch('/users');

  useEffect(() => {
    dispatch(usersActions.requestUsers());
    get();
  }, [dispatch, get]);

  useEffect(() => {
    if (data) {
      dispatch(usersActions.receiveUsers(data));
    }
  }, [dispatch, data]);

  return [users.data, users.loading, error];
}
