import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';

// https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
import Home from '../../routes/Home';
import AboutUs from '../../routes/AboutUs';
import Contacts from '../../routes/Contacts';

export default () => (
  <Router>
    <div>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </Router>
);
