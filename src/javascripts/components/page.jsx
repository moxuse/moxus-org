/*
  page.jsx
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import Header from './header.jsx';
import Footer from './footer.jsx';
import Container from './container.jsx';
import Paginator from './paginator.jsx';
import ReactMixin from 'react-mixin';
import { State } from 'react-router';

import data from '../../data.json'

const NUM_POST_PAR_A_PAGE = 4

class Page extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.getDefaultState.bind(this)();
    this.getCurrentRange = this.getCurrentRange.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);    
    this.onPageChanged = this.onPageChanged.bind(this);
  }
  getDefaultState() {
    return {currentPage: 1, currentRange: {from: 1, to: NUM_POST_PAR_A_PAGE}};
  }

  getCurrentRange() {
    var from = 1;
    if (this.state) {
      from = (this.state.currentPage - 1) * NUM_POST_PAR_A_PAGE;
    };
    const to = from + NUM_POST_PAR_A_PAGE;
    return {from: from, to: to};
  }

  getCurrentData() { // generate datas for each page..
    const from = this.getCurrentRange().from;
    const to = this.getCurrentRange().to;
    //console.log('Pge::getCurrentData: ',data, from, to);
    return data.slice(from, to);
  }

  onPageChanged(page) {
    this.setState({currentPage: page});
  }

  render() {
    var currentRange = this.getCurrentRange();
    var currentData = this.getCurrentData();

    return (
      <div>
        <div className="page">            
          <Container multiple={true} data={currentData}/>
          <Paginator currentPage={currentRange.from + 1} dataLength={data.length} postParARange={NUM_POST_PAR_A_PAGE} onChange={this.onPageChanged}/>        
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  id: PropTypes.number
};

ReactMixin.onClass(Page, State);

Page.defaultProps = {data: data};

export default Page;

