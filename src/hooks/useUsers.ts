import { useEffect } from 'react';
import { useFetch } from 'use-http';
import { useSelector, useDispatch } from 'react-redux';

import { usersActions } from '../actions';

// unfortunate i am not familiar with immutable.js types
export function useUsers(): [any, boolean, unknown] {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.get('users'));

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

  return [users.get('data'), users.loading, error];
}
