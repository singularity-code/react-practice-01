import React, { Component } from "react";
import LifeCycleSample from "../component/LifeCycleSample";
import ErrorBoundary from "../component/ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class Chapter02 extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <button onClick={this.handleClick}>Random Color</button>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Chapter02;
