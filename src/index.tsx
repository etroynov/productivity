import 'antd/dist/antd.css';

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './App';

import { rootReducer } from './reducers';

// Dev

import { mocks } from './mocks';
import reportWebVitals from './reportWebVitals';

import './index.css';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  mocks.init(() => {
    mocks.server.start();
  });
}

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
