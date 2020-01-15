import React from 'react';
import Header from './components/header-component/header.component';
import Footer from './components/footer-component/footer.component';
import Hotels from './components/main-component/category-item-components/hotels.component';
import Events from './components/main-component/category-item-components/events.component';
import Mustsee from './components/main-component/category-item-components/mustsee.component';
import Shops from './components/main-component/category-item-components/shops.component';
import Transport from './components/main-component/category-item-components/transport.component';
import Restaurants from './components/main-component/category-item-components/restaurants.component';
import Bars from './components/main-component/category-item-components/bars.component';
import Info from './components/main-component/category-item-components/info.component';
import Home from './components/main-component/home.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/hotels">
          <Header /><Hotels /><Footer />
        </Route>
        <Route path="/events">
          <Header /><Events /><Footer />
        </Route>
        <Route path="/mustsee">
          <Header /><Mustsee /><Footer />
        </Route>
        <Route path="/shops">
          <Header /><Shops /><Footer />
        </Route>
        <Route path="/transport">
          <Header /><Transport /><Footer />
        </Route>
        <Route path="/restaurants">
          <Header /><Restaurants /><Footer />
        </Route>
        <Route path="/bars">
          <Header /><Bars /><Footer />
        </Route>
        <Route path="/info">
          <Header /><Info /><Footer />
        </Route>
        <Route path="/">
          <Header /><Home /><Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
