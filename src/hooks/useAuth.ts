import { useEffect } from 'react';
import { useFetch } from 'use-http';
import { useSelector, useDispatch } from 'react-redux';

import {} from '../actions';

export function useAuth(email: string, password: string): [any, boolean, unknown] {
  const dispatch = useDispatch();

  const { post, data, loading, error } = useFetch('/login');

  useEffect(() => {
    post({ email, password });
  }, [post, email, password]);

  return [data, loading, error];
}
