/*
  footer.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';

import styles from './footer.css'

class Footer extends Component {

  render() {
    var nextClick = this.nextPage;
    return (
      <div className={styles.footer}>
        <hr></hr>
        <p>
          © 2006-17 moxus.org
        </p>
      </div>
    )
  }
}

export default Footer;
