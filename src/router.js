import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';

import Loader from './components/Loader';
// import IndexLayout from './containers';
import NotFoundPage from './pages/404';

const loadable = (loader) =>
  Loadable({
    loader,
    loading: () => <Loader />,
    delay: 300,
  });

const routes = [
  // TODO: add routes
  {
    path: '/',
    component: loadable(() => import('./pages')),
    exact: true,
  },
];

export default function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
            exact={route.exact}
          />
        ))}
        <Route path="" component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
};
