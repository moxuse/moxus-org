/*
  footer.jsx
*/

import React, { Component } from 'react'
import { render } from 'react-dom';

class Footer extends Component {

  render() {
    var nextClick = this.nextPage;
    return (
      <div className="footer">
        <hr></hr>
        <p>
          moxus.org : 2004-2017
        </p>
      </div>
    )
  }
}

export default Footer;
