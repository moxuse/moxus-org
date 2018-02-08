/**
 * constents.jsx
 */

import React, { Component } from 'react';
import backgroundCanvas from '../lib/background_canvas';

import styles from './background_canvas.css';

class BackgroundCanvas extends Component {
  render() {
    const canvas = document.querySelector('.background_canvas');
    if (location.pathname.indexOf('blog') > -1 && !canvas) {
      backgroundCanvas('#app');
    }
    return (
      <div className={`${styles.background_canvas}`}> </div>
    );
  }
}

export default BackgroundCanvas;
