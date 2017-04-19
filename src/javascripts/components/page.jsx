/*
  page.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import Header from './header.jsx'
import Footer from './footer.jsx'
import Container from './container.jsx'
import Paginator from './paginator.jsx'
import ReactMixin from 'react-mixin'
import { State } from 'react-router'

import data from '../../data.json'

class Page extends Component {
  
  constructor(props) {
    super(props);
    this.POST_NUM_PAR_A_PAGE = 4;
    //this.props = {id : props.match.params.id};
    this.getCurrentId = this.getCurrentId.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
    this.state = this.getCurrentId();
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  getCurrentId() {
    var id = 1;
    if (this.state) {
      id = +this.state.id;
    };

    var max = Math.floor(data.length / this.POST_NUM_PAR_A_PAGE) + 1;
  
    return {id: id, max: max};
  }

  getCurrentData() { // generate datas for each page..
    var index = this.POST_NUM_PAR_A_PAGE * this.getCurrentId().id - 1;
    console.log(data)
    return data.slice(index, index + this.POST_NUM_PAR_A_PAGE);
  }

  onPageChanged(page) {
    // mounted
    this.setState({id: page});
  }

  render() {
    var currentId = this.getCurrentId();
    var currentData = this.getCurrentData();

    console.log('Page::render');

    console.log(currentId, currentData)

    return (
      <div className="page">        
        <Container data={currentData}/>
        <Paginator currentPage={currentId.id} onChange={this.onPageChanged} max={currentId.max}/>        
      </div>
    )
  }
}

Page.propTypes = {
  id: PropTypes.number
};

ReactMixin.onClass(Page, State);

Page.defaultProps = {id: 1};

export default Page;

