/*
  header.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import styles from './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultStates();
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  
  getDefaultStates() {
    return {toggleMenu: false};
  }

  onMenuClick(e) {
    this.setState({toggleMenu: !this.state.toggleMenu});
    this.forceUpdate();
  }

  render() {
    const isOpen = this.state.toggleMenu ? 'open' : '';
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>          
            <Link to={`/`}>moxus.org</Link>
          </h1>
          <div className={styles.menu_btn_wrap}>
            <div className={`menu_btn btn12 ${isOpen}`} onClick={this.onMenuClick} >
              <div className={`icon`}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;



// <ul className={styles.menu}>
// <li><Link to={`/`}>top</Link></li>
// <li><Link to={`/cv/1`} id={1}>cv</Link></li>
// <li><Link to={`/project`}>project</Link></li>
// <li><Link to={`/blog/1`} id={1}>blog</Link></li>
// </ul>