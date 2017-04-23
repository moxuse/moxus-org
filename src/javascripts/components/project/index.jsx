/*
  post.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Thumbnail from './thumbnail.jsx';

import styles from './index.css'

import data from '../../../project.json';

class Project extends Component {
  makeGrid() {
    let grid = [];
    let col = [];
    this.props.data.map((item , i) => {
      col.push(<Thumbnail type="row" data={item} />);
      if (2 == i%3 || i === this.props.data.length - 1) {
        grid.push(col);
        col = [];
      }
    })
    return grid;
  }

  render() {
    const rows = this.makeGrid();
    return (
      <div className={`project ${styles.project}`}>
        <h2>
          project
        </h2>
        <Grid className={styles.grid}>
          <Row>
            {rows}
          </Row>
        </Grid>
      </div>
      )
  }
}

export default Project;

Project.propTypes = {
  data: PropTypes.array
};

Project.defaultProps = {
  data: data
}
