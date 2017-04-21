/*
  container.jsx
*/
import React, { Component } from 'react'
import Post from './post.jsx'

 class Container extends Component {

  render() {
    var rows = [];
    var data = this.props.data;

    data.map((item) => {
      var key;
      var title = key = item.title;
      var image = './images/' + item.image;
      var date = item.date;
      rows.push(<Post title={title} image={image} date={date} key={key} />)
    })

    return (
      <div className="container">
        {rows}
      </div>
    )
  }
}

export default Container;
