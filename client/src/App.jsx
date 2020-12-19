import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Simulator from './pages/simulator/simulator';
import NotFound from './pages/notFound/notFound';

const App = () => {
  return (
    <BrowserRouter><Switch>
      <Route exact path="/" component={Simulator} />
      <Route path="*" component={NotFound} />
    </Switch></BrowserRouter>
  );
}

export default App;
