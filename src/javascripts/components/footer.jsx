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
          © 2006-17 moxus.org
        </p>
      </div>
    )
  }
}

export default Footer;
