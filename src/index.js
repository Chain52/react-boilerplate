import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import Router from './router';
import * as serviceWorker from './serviceWorker';

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); // eslint-disable-line global-require
  middlewares.push(logger);
}

const store = createStore(
  reducers(history),
  compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
