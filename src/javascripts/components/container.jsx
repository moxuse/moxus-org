/*
  container.jsx
*/
import React, { Component } from 'react'
import Post from './post.jsx'
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import { History } from 'react-router';
import PostLoader from '../lib/PostLoader'

class Container extends Component {
  constructor(props) {
    super(props);
    console.log('Container::const',props.data);
    this.mapItem = this.mapItem.bind(this);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {rows: []}
  }

  mapItem(item) {
    return new Promise((resolve) => {
      var title = item.title;
      const image = './images/' + item.image;
      var date = item.date;
      if (!date) {
        date = item.path.slice(0,10);
        console.log(date);
      }
      new PostLoader(item.path)
        .then((res) => {          
          const key = res.attributes.post_id + Date.now();
          const post = <Post title={res.attributes.title} date={date} body={res.body} key={key} />;
            resolve(post);
        });
    })  
  }
  componentDidMount() {
    this.assigin();
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps", this.props.data);
    this.assigin();
  }
  assigin() {
    //this.setState({rows: []});
    let new_rows = [];
    var all;
    if (this.props.multiple) {
      all = this.props.data.map((item) => {
        return this.mapItem(item)
          .then((res) => {
            new_rows.push(res);
            //this.forceUpdate();
          });         
      })
    } else {
      all = this.mapItem(this.props.data)
        .then((res) => {
          new_rows.push(res);  
          //this.forceUpdate();
        })      
    }
    console.log(this.props.data,all)
    Promise.all(all)
      .then(() => {
        this.setState({rows: new_rows});
        console.log('Container::assigin',this.state.rows[0], new_rows[0]);
        this.forceUpdate();
      })
  }

  render() {
    console.log('Container::draw..',this.state.rows[0]);
    return (
      <div className="container">
        {this.state.rows}
      </div>
    )
  }
}

Container.propTypes = {
  multiple: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
};

ReactMixin.onClass(Container, History);

Container.defaultProps = {
  multiple: false,
  data: []
};

export default Container;
