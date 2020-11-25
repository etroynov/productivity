import { FC } from 'react';

import { Redirect } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  HomePage,
  UsersPage,
  LoginPage,
  RegisterPage,
  NotFound,
} from './pages';

import { useAuth } from './hooks';

export const App: FC = () => {
  const { user } = useAuth();

  console.info(user.get('data'));

  if (!user.get('data')) {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/users">
          <UsersPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
