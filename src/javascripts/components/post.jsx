/*
  post.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import MD from 'react-markdown';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="title">
          <h2>
            {this.props.title}
          </h2>
        </div>

        <div className="date">
          <h3>
            {this.props.date}
          </h3>
        </div>

        <div className="content">
          <MD source={this.props.body} />
        </div>
      </div>
    )
  }
}

export default Post;

//