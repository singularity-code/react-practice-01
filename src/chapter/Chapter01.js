import React, { Component } from "react";
import logo from "../logo.svg";
import ScrollBox from "../component/ScrollBox";
import IterationSample from "../component/IterationSample";

class Chapter01 extends Component {
  render() {
    const test = true;
    return (
      <div>
        {test === true ? (
          <div className="App">
            <header className="App-header">
              <p>Test Mode</p>
              <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
              <button onClick={() => this.scrollBox.scrollToBottom()}>
                Go to Bottom
              </button>
              <IterationSample></IterationSample>
            </header>
          </div>
        ) : (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Production Mode</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )}
      </div>
    );
  }
}

export default Chapter01;
