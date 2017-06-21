/*
  digest.jsx
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';
import DigestPost from './post.jsx';
import DigestProject from './project.jsx';
import PostLoader from '../../lib/PostLoader';

import post_data from '../../../data.json';
import project_data from '../../../project.json';

import styles from './index.css';

class Digest extends Component {
  constructor(props) {
    super(props);
    this.mapItem = this.mapItem.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.post_rows = [];
    this.project_rows = [];
  }

  componentDidMount() {
    Promise.all([
      this.getPosts(post_data.slice(0, 3)),
      this.getProjects(project_data.slice(0, 2))
    ])
    .then(() => {
      this.forceUpdate();
    });
  }

  componentWillReceiveProps(props) {
    
  }

  mapItem(item) {
    return new Promise((resolve) => {
      var date = item.date;
        if (!date) {
          date = item.path.slice(0, 10);
        }

      new PostLoader(item.path)
        .then((res) => {
          const key = res.attributes.post_id + Date.now();
          const contents = <DigestPost title={res.attributes.title} date={date} body={res.body} key={key} path={res.path} layout={res.attributes.layout}/>;
          resolve(contents);
        });
    });
  }

  getPosts(data) {
    const all = data.map((item) => {
        return this.mapItem(item)
          .then((res) => {
            this.post_rows.push(res);
          });
        });
    return Promise.all(all);
  }

  getProjects(data) {
    data.map((item, i) => {
      const key = item.path + Date.now();
      this.project_rows.push(<DigestProject data={item} key={key}/>);
    });
    console.log(this.project_rows);
  }

  render() {
    return (
      <div className={styles.digest}>
        
        <div className={styles.posts}>
          <h3>recent posts</h3>
          <p className={styles.more}>
            <Link to={`/blog/1`}>more</Link>
          </p>
          <hr />
          {this.post_rows}
        </div>

        <div className={styles.projects}>
          <h3>project</h3>
          <p className={styles.more}>
            <Link to={`/project`}>more</Link>
          </p>
          <hr />
          {this.project_rows}
        </div>

      </div>
    );
  }
}

export default Digest;