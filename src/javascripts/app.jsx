/**
 * app.jsx
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory
} from 'react-router';

import Menu from './components/menu.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Page from './components/page.jsx';
import Post from './components/post.jsx';
import Project from './components/project/index.jsx';
import Digest from './components/digest/index.jsx';
import NotFound404 from './components/notfound404.jsx';
import scrollTop from './lib/ScrollTop.js';

import 'normalize/normalize.css';
import styles from './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onCloseMenu = this.onCloseMenu.bind(this);
    this.onMenuChange = this.onMenuChange.bind(this);
    this.getDigest = this.getDigest.bind(this);
  }
  onCloseMenu() {
    this.refs.header.setState({toggleMenu: false});
    scrollTop();
  }
  onMenuChange(state) {
    if (this.refs.menu) {
      this.refs.menu.setChangeState(state);
    }
  }
  getDigest() {
    let digest;
    if (this.props.location.pathname === '/') {
      digest = <Digest ref="digest"/>;
    }
    return digest;
  }
  componentDidUpdate() {
    const canvas = document.querySelector('.background_canvas');
    if (!canvas) {
      return;
    }
    if (this.props.location.pathname.indexOf('blog') === -1) {
      canvas.style.display = 'none';
    } else {
      canvas.style.display = '';
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <Menu onClose={this.onCloseMenu} ref="menu" />
        <Header onMenuChange={this.onMenuChange} ref="header" />
        <main>
          {this.props.children}
        </main>
        {this.getDigest()}
        <Footer />
      </div>
    );
  }
}

class Inbox extends Component {
  render() {
    // console.log('Index::props.children',this.props.children)
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
    <Route path='work' component={ Project } />

    <Route path="top" component={ Inbox }>
      <Redirect from="blog/:id" to="/blog/:id" />
    </Route>

    <Route component={ Inbox }>
      <Route path='blog/:id' component={ Page } />
    </Route>

    <Redirect from="blog" to="/blog/1" component={ Inbox } />

    <Route>
      <Route path='post/:id' component={ Post } />
    </Route>

    <Route path='*' component={ NotFound404 } />
  </Route>
);

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);

export default App;
