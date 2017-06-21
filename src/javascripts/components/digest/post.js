/*
  DigestPost
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import MD from 'react-markdown';

class DigestPost extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    let body = "";
    let body_arr = this.props.body.split(/\r\n|\r|\n/);
    body_arr = body_arr.slice(0, 4);
    body_arr.map((item) => {
      if (0 <= item.indexOf('![')) {
        return
      }
      body += item;
    });
    
    return (
      <div>
        <p>DigestPost</p>
        <div className={`date`}>
          <h1>
          {this.props.title}
          </h1>
          {this.props.date}
          <MD source={"" + body} />
        </div>
      </div>
    )
  }
}

export default DigestPost;
