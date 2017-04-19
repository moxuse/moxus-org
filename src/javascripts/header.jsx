/*
  header.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import { IndexLink, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>          
            moxus.org          
        </h1>
        <ul>
          <li><NavLink to={`/#/`}>Home</NavLink></li>
          <li><NavLink to={`/page/0`} id={0}>Page</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Header;

