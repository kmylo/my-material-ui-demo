import React, { Component } from "react";

class LoggedIn extends Component {
  render() {
    return (
      <div>
        Login Layout
        {this.props.children}
      </div>
    );
  }
}

export default LoggedIn;
