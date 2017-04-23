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

import Menu from './components/menu.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Page from './components/page.jsx';
import Project from './components/project.jsx';
import NotFound404 from './components/notfound404.jsx'

import styles from "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }
  onCloseMenu() {    
    this.refs.header.setState({toggleMenu: false});
  }
  render () {
    return (
      <div className={styles.app}>                
        <Menu onClose={this.onCloseMenu}/>
        <Header ref="header"/>
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
    //console.log('Index::props.children',this.props.children)
    return (
      <div className={styles.subtitle}>
        <h1>
          blog
        </h1>
        {this.props.children}
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

    <Redirect from="blog" to="/blog/1" component={ Inbox } />

    <Route path='*' component={ NotFound404 } />   
  </Route>
)

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);


export default App;
