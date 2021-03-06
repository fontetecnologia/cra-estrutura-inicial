import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  </nav>
);
