import React from "react";
import { Component } from "react";

class Result extends Component {
  setStyleColor() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize,
      borderColor: this.props.color,
    };
  }
  render() {
    return (
      <div
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        style={this.setStyleColor()}
      >
        <p>
          Color: {this.props.color} - font size {this.props.fontSize}px
        </p>
        <div id="content-result" style={this.setStyleColor()}>
          Content Result
        </div>
      </div>
    );
  }
}

export default Result;
