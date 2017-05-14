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
import { TweenLite } from 'gsap';

import styles from './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setChangeState = this.setChangeState.bind(this);
  }

  onClick () {
    this.props.onClose();
    
    $('.menu_btn').removeClass('open');    
  }

  setChangeState (state) {
    switch(state) {
      case 'open':
        TweenLite.set(this.refs.menu, {opacity: 0});
        TweenLite.to(this.refs.menu, 0.6, {
          opacity: 1,
          ease: 'Power2.easeOut'
        });
        
        $(this.refs.menu_list.children).each((i, $item) => {
          TweenLite.set($item, {y: 80, opacity: 0});
          TweenLite.to($item, 0.45, {
            y: 1,
            opacity: 1,
            delay: (i * 0.03),
            ease: 'Power2.easeInOut'
          });  
        });        
        break;

      case 'close':
        TweenLite.to(this.refs.menu, 0.6, {
          opacity: 0,
          delay: 0.2,
          ease: 'Power2.easeOut',
          onComplete: () => {
            $(this.refs.menu).css({display: 'none'});
          }
        });

        $(this.refs.menu_list.children).each((i, $item) => {
          TweenLite.set($item, {y: 0});
          TweenLite.to($item, 0.45, {
            y: -80,
            opacity: 0,
            delay: (i * 0.03),
            ease: 'Power2.easeInOut'
          });  
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={`menu ${styles.menu}`} ref='menu'>
        <ul ref='menu_list'>
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