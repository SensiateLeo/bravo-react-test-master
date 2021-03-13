import React from 'react';
import { Switch  } from 'react-router-dom';
import ChoosePokemon from '../views/ChoosePokemon/ChoosePokemon';

import Home from '../views/Home/Home';
import List from '../views/List/List';
import NotFound from '../views/NotFound/NotFound';
import Route from './routes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route exact path="/choosePokemon" component={ChoosePokemon} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
