import React from "react";
import { Component } from "react";

class SeetingSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "",
    };
  }

  changeSize = (value) => {
    this.props.onChangeSize(value);
  };
  render() {
    return (
      <div className="setting-size">
        <p>Setting size: {this.props.fontSize}px</p>
        <button
          className="btn btn-danger mr-1"
          onClick={() => this.changeSize(-2)}
        >
          Down
        </button>
        <button className="btn btn-success" onClick={() => this.changeSize(2)}>
          Up
        </button>
      </div>
    );
  }
}

export default SeetingSize;
