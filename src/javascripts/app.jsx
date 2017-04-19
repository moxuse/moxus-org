/*
  app.jsx
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Page from './components/page.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        
        <main>
          {this.props.children}
        </main>

        <Footer />
      </div>
    );
  }
}

const Root = () => (
    <Router>
      <div>
    
        <Route exact path='/' component={ App } />      
        <Route name='page' path='/page/:id/' component={ Page } />    

      </div>
    </Router>  
);

ReactDOM.render(<Root />, document.getElementById('content'))

export default App;
