/**
 * post.jsx
 */

import React, { Component } from 'react';

import Container from './container.jsx';

class Post extends Component {
  render() {
    const unwraped = [{path: this.props.params.id + '.md'}];

    return (
      <div>
        <div className="container">
          <Container multiple={false} currentData={unwraped} />
        </div>
      </div>
    );
  }
}

export default Post;
