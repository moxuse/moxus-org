/**
 * header.jsx
 */

import React, { Component } from "react";
import { Link } from "react-router";
import styles from "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultStates();
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onMenuChange = this.onMenuChange.bind(this);
  }

  getDefaultStates() {
    return { toggleMenu: false };
  }

  onMenuClick(e) {
    this.setState({ toggleMenu: !this.state.toggleMenu });
    this.forceUpdate();
  }

  onMenuChange(state) {
    if (this.props.onMenuChange) {
      this.props.onMenuChange(state);
    }
  }

  render() {
    const isOpen = this.state.toggleMenu ? "open" : "";
    if (isOpen) {
      this.onMenuChange("open");
    } else {
      this.onMenuChange("close");
    }
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>
            <Link to={`/`}>moxus.org</Link>
          </h1>
          <div className={styles.menu_btn_wrap}>
            <div
              className={`menu_btn btn12 ${isOpen}`}
              onClick={this.onMenuClick}
            >
              <div className={`icon`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
