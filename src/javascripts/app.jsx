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
  hashHistory
} from 'react-router'

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Page from './components/page.jsx';
import Project from './components/project.jsx';
import NotFound404 from './components/notfound404.jsx'

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

class Inbox extends Component {
  render () {
    console.log(this.props.children)
    return (
      <div>
        <h1>
          Index
        </h1>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    );
  }
}

var routes = (
  <Route exact path= '/' component={ App }>
    <IndexRoute component={ Page }/>
    <Route path='project' component={ Project } />

    <Route path="top" component={ Inbox }>
      <Redirect from="blog/:id" to="/blog/:id" />
    </Route>

    <Route component={ Inbox }>
      <Route path='blog/:id' component={ Page } />
    </Route>
    <Route path='*' component={ NotFound404 } />   
  </Route>
)

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);


export default App;
