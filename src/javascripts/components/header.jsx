/*
  header.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router';

import styles from './header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>          
            moxus.org      
        </h1>
        <ul className={styles.menu}>
          <li><Link to={`/`}>top</Link></li>
          <li><Link to={`/cv/1`} id={1}>cv</Link></li>
          <li><Link to={`/project`}>project</Link></li>
          <li><Link to={`/blog/1`} id={1}>blog</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;

