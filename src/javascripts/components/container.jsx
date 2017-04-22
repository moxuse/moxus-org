/*
  container.jsx
*/
import React, { Component } from 'react'
import Post from './post.jsx'
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import { History } from 'react-router';

class Container extends Component {
  constructor(props) {
    super(props);
    this.mapItem = this.mapItem.bind(this);
  }

  mapItem(item) {
    var key;
    var title = key = item.title;
    const image = './images/' + item.image;
    const date = item.date;
    return <Post title={title} image={image} date={date} key={key} />;
  }

  render() {
    let rows = [];
    const data = this.props.data;

    if (this.props.multiple) {
      data.map((item) => {
         rows.push()
         rows.push(this.mapItem(item));
      })
    } else {     
      rows.push(this.mapItem(data));
    }

    return (
      <div className="container">
        {rows}
      </div>
    )
    return (
      <div>
    
      </div>
    )
  }
}

Container.propTypes = {
  multiple: PropTypes.bool.isRequired,
};

ReactMixin.onClass(Container, History);

Container.defaultProps = {
  multiple: false,
};

export default Container;
