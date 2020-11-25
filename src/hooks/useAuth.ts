import { useEffect, useCallback } from 'react';
import { useFetch } from 'use-http';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActions } from '../actions';

// unfortunate i am not familiar with immutable.js types
export function useAuth(): { user: any, handlers: any, loading: boolean, error: unknown } {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.get('auth'));

  const { post, data, loading, error } = useFetch('/login');

  const login = useCallback((values) => {
    dispatch(authActions.requestLogin());
    post(values);
  }, [dispatch, post]);

  useEffect(() => {
    if (data) {
      dispatch(authActions.receiveLogin(data));
      history.push('/');
    }
  }, [data, dispatch, history])

  const handlers = {
    login
  };

  return { user, handlers, loading, error };
}
