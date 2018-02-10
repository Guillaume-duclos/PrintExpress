import React, { Component } from 'react';
import Presentation from './screens/Presentation';
import Products from './screens/Products';
import Devis from './screens/Devis';
import Commande from './screens/Commande';
import CustomProduct from './screens/CustomProduct';
import Home from './screens/Home';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/Home" exact render={() => <Home/>} />
        <Route path="/Products" exact render={() => <Products/>} />
        <Route path="/CustomProduct" exact render={() => <CustomProduct/>} />
        <Route path="/Devis" exact render={() => <Devis/>} />
        <Route path="/Commande" exact render={() => <Commande/>} />
        <Route path="*" exact render={() => <Home/>} />
      </Switch>
    </Router>
  )
};

export default Routes;
