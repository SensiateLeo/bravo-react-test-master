import React from 'react';
import { Switch  } from 'react-router-dom';

import Home from '../views/Home/Home';
import List from '../views/List/List';
import NotFound from '../views/NotFound/NotFound';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
