/*
  post.jsx
*/
import { filter } from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import Container from './container.jsx';

import data from '../../data.json'

class Post extends Component {

  render() {
    var currentData = filter(data, {path: this.props.params.id+".md"});
    const unwraped = currentData;
    return (
      <div>
        <div className="page">            
          <Container multiple={false} data={unwraped} />
        </div>
      </div>
    )
  }
}

// Post.propTypes = {
//   path: PropTypes.string
// };

// Post.defaultProps = {path: ""};

export default Post;

