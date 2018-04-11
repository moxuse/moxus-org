/**
 * project.jsx
 */

import React, { Component } from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import Thumbnail from './thumbnail.jsx';

import styles from './index.css';

import data from '../../../project_data.json';

class Project extends Component {
  makeGrid() {
    let grid = [];
    let col = [];
    this.props.data.map((item, i) => {
      col.push(<Thumbnail type="row" data={item} />);
      if (i % 3 === 2 || i === this.props.data.length - 1) {
        grid.push(col);
        col = [];
      }
    });
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
    );
  }
}

export default Project;

Project.defaultProps = {
  data: data
};
