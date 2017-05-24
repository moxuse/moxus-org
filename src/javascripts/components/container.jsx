/*
  container.jsx
*/
import React, { Component } from 'react';
// import { render } from 'react-dom';
import Contents from './contents.jsx';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import { History } from 'react-router';
import PostLoader from '../lib/PostLoader';

class Container extends Component {
  constructor(props) {
    super(props);
    this.mapItem = this.mapItem.bind(this);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {rows: []};
  }

  mapItem(item) {
    return new Promise((resolve) => {
      // var title = item.title;
      // const image = './images/' + item.image;
      var date = item.date;
      if (!date) {
        date = item.path.slice(0, 10);
      }
      new PostLoader(item.path)
        .then((res) => {
          const key = res.attributes.post_id + Date.now();
          const contents = <Contents title={res.attributes.title} date={date} body={res.body} key={key} path={res.path} layout={res.attributes.layout}/>;
          resolve(contents);
        });
    });
  }
  componentDidMount() {
    this.assigin();
  }

  componentWillReceiveProps() {
    this.assigin();
  }

  assigin() {
    // this.setState({rows: []});
    let new_rows = [];
    var all;
    if (this.props.multiple) {
      all = this.props.data.map((item) => {
        return this.mapItem(item)
          .then((res) => {
            new_rows.push(res);
            // this.forceUpdate();
          });
      });
    } else {
      all = this.mapItem(this.props.data[0])
        .then((res) => {
          new_rows.push(res);
          // this.forceUpdate();
        });
      all = [all];
    }
    // console.log(this.props.data,all)
    Promise.all(all)
      .then(() => {
        this.setState({rows: new_rows});
        // console.log('Container::assigin',this.state.rows[0], new_rows[0]);
        this.forceUpdate();
      });
  }

  render() {
    // console.log('Container::draw..',this.state.rows[0]);
    return (
      <div>
        {this.state.rows}
      </div>
    );
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
