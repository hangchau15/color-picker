import React from "react";
import { Component } from "react";

class Reset extends Component {
  resetAll = () => {
    this.props.onReset(true);
  };
  render() {
    return (
      <div className="btn btn-primary mt-2" onClick={this.resetAll}>
        Reset
      </div>
    );
  }
}

export default Reset;
