/*
  post.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import MD from 'react-markdown';

import styles from './contents.css';

class Constents extends Component {
  render() {
    return (
      <div className={styles.constents}>
        <div className={styles.title}>
          <h2>
            {this.props.title}
          </h2>
        </div>

        <div className={styles.date}>
          <h3>
            {this.props.date}
          </h3>
        </div>

        <div className={styles.content}>
          <MD source={this.props.body} />
        </div>
      </div>
    )
  }
}

export default Constents;

//