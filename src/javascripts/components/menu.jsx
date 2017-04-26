/*
  menu.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link
} from 'react-router'

import styles from './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.props.onClose();
    $(this.refs.menu).css({display: 'none'});
    
    $('.menu_btn').removeClass('open');    
  }

  render() {
    return (
      <div className={`menu ${styles.menu}`} ref='menu'>
        <ul>
          <li><Link to={`/`} onClick={this.onClick}>top</Link></li>
          <li><a href={`https://github.com/moxuse/cv/blob/master/README.md`} target='blank'>cv</a></li>
          <li><Link to={`/project`} onClick={this.onClick}>project</Link></li>
          <li><Link to={`/blog/1`} id={1} onClick={this.onClick}>blog</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu;

Menu.propTypes = {
  onClose: PropTypes.func.isRequired
}

Menu.defaultProps = {
  onClose: undefined
}