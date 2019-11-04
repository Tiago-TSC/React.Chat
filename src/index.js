import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import socketMiddleware from './middlewares/socketMiddleware';
import usersReducer from './store/reducers/usersReducer';
import messagesReducer from './store/reducers/messagesReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware())),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
