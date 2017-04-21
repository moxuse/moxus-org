/*
  header.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>          
            pagenator-test        
        </h1>
        <ul>
          <li><Link to={`/#/`}>Home</Link></li>
          <li><Link to={`/#/page/1`} id={1}>Page</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;

