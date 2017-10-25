/*
  DigestPost
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import MD from 'react-markdown';

import styles from './post.css';

class DigestPost extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    let body = "";
    let body_arr = this.props.body.split(/\r\n|\r|\n/);
    const img_src = 'images/digest_thumbs/thumb_' + this.props.id + '.jpg';
    body_arr = body_arr.slice(0, 4);
    body_arr.map((item) => {
      if (0 <= item.indexOf('![')) {
        return
      }
      body += item;
    });

    return (
      <div className={styles.post}>
        <div className={styles.left}>
          <Link to={`post/${this.props.path}`}>
            <img src={img_src} />
          </Link>
        </div>

        <div className={styles.right}>
          <h3>
            <Link to={`post/${this.props.path}`}>
              {this.props.title}
            </Link>
          </h3>
        
          <div className={styles.date}>
            {this.props.date}
          </div>
        
          <MD source={"" + body} />   
        </div>     
      </div>
    )
  }
}

export default DigestPost;
