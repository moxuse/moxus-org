/*
  thumbnail.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import { Route, Link } from 'react-router';
import styles from './thumbnail.css';

class Thumbnail extends Component {
  render() {
    const path_name = this.props.data.path.substr(0, this.props.data.path.length-3)
    return (
      <div className={styles.thumbnail}>        
        <Link to={`/post/${path_name}`}>
          <img src={`../../images/thumb/${this.props.data.thumb}`} alt={this.props.data.title}/>
        </Link>
        <p className={styles.title}>
          {this.props.data.title}
        </p>        
      </div>
    )
  }
}
export default Thumbnail;
