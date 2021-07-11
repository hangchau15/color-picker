import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ColorPicker from "./components/ColorPicker";
import SettingSize from "./components/SettingSize";
import Result from "./components/Result";
import Reset from "./components/Reset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 16,
    };
  }

  setColor = (params) => {
    this.setState({
      color: params,
    });
  };

  onChangeSize = (value) => {
    this.setState({
      fontSize:
        this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36
          ? this.state.fontSize + value
          : this.state.fontSize,
    });
  };

  onReset = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 16,
      });
    }
  };

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.setColor}
          ></ColorPicker>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SettingSize
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            ></SettingSize>
            <Reset onReset={this.onReset}></Reset>
          </div>
          <Result
            color={this.state.color}
            fontSize={this.state.fontSize}
          ></Result>
        </div>
      </div>
    );
  }
}

export default App;
