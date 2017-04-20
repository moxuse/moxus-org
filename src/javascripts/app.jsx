/*
  app.jsx
*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  Link,
  browserHistory
} from 'react-router'

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

var routes = (
  <Route path= '/' component={ App }>
    <IndexRoute name='/page' component={ Page }/>
    <Route name='page' path='../page/:id' component={ Page } />
  </Route>
)

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);


export default App;
