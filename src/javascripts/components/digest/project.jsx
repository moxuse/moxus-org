/*
  DigestProject
*/

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './project.css';

class DigestProject extends Component {
  render() {
    let ex_path = this.props.data.ex_path;
    let path_name = 'post/' + this.props.data.path.substr(0, this.props.data.path.length - 3);
    const isRight = this.props.isRight ? styles.right : '';
    const isRight_img = this.props.isRight ? styles.right_img : '';
    let body =
        (<Link to={`${path_name}`}>
          <img className={isRight_img} src={`../../images/thumb/${this.props.data.thumb}`} alt={this.props.data.title}/>
        </Link>);
    if (ex_path) {
      path_name = ex_path;
      body = (
        <a href={`${path_name}`} target="blank">
          <img className={isRight_img} src={`../../images/thumb/${this.props.data.thumb}`} alt={this.props.data.title}/>
        </a>);
    }
    return (
      <div className={styles.project}>
        <div className={styles.body + ' ' + isRight}>
          {body}
        </div>
      </div>
    );
  }
}

export default DigestProject;
