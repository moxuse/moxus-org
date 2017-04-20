/*
  paginator.jsx
*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin'
import { createLocation } from 'history';
import { reactMixin } from 'react-mixin';
import { State, Link, History } from 'react-router';

class Paginator extends Component {

  constructor(props) {
    super(props);

    var id = 1;
    if (this.props.params) {
      id = this.props.params.id;
    }

    this.state = {
      currentPage: id,
      items: []
    }

    this.onClicked = this.onClicked.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
        //console.log('staet change..')
    }
  }

  onClicked(newPage) {
    this.setState({currentPage: newPage});
    this._onChange();
  }

  _onChange() {
    console.log('pagenator::onchnage',this.state.currentPage);
    this.props.onChange(this.state.currentPage);
  }

  render() {
    var className = this.props.className || '',
      p = this.props,
      s = this.state,
      skip = 0;

    if (s.currentPage > p.maxVisible - 1 && s.currentPage < p.max) {
      skip = s.currentPage - p.maxVisible + 1;
    } else if (s.currentPage === p.max) {
      skip = s.currentPage - p.maxVisible;
    }

    var iterator = Array.apply(null, Array(p.maxVisible)).map(function(v, i) {
      return skip + i + 1;
    });

    var previousPage = 1; 
    if (s.currentPage > 1) {
      previousPage = s.currentPage - 1;
    };
    var nextPage = 1;
    if (s.currentPage < p.max) {
      nextPage = s.currentPage + 1
    }

    return (
      <nav className='paginator'>
        <ul className={'pagination ' + className}>
          <li className={s.currentPage === 1 ? 'disabled' : ''}>
            
              <Link to={'../page/' + previousPage} onClick={this.onClicked.bind(this, previousPage)}>   
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Prev</span>
              </Link>
            
          </li>
          {iterator.map(function(page) {
            return (
              <li key={page}
                className={s.currentPage === page ? 'active' : ''}>
                <Link to={'../page/' + page} onClick={this.onClicked.bind(this, page)}>
                  {page}
                </Link>
              </li>
            );
          }, this)}
          <li className={s.currentPage === p.max ? 'disabled' : ''}>
            <Link to={'../page/' + nextPage} onClick={this.onClicked.bind(this, nextPage)}>
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
Paginator.propTypes = {
  params: PropTypes.object,
  max: PropTypes.number.isRequired,
  maxVisible: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

ReactMixin.onClass(Paginator, State);
ReactMixin.onClass(Paginator, History);

Paginator.defaultProps = { 
  params: {},
  max: 0,
  maxVisible: 5,
  onChange: ()=>{}
};

// reactMixin(Paginator.prototype, State);
// Paginator.prototype.linkState = React.addons.LinkedStateMixin.linkState
// reactMixin(Paginator.prototype, History);

export default Paginator;
