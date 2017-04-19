/*
  post.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="date">
          <p>
            {this.props.date}
          </p>
        </div>
       

        <div className="title">
          <p>
            {this.props.title}
          </p>
        </div>
      </div>
    )
  }
}

export default Post;
