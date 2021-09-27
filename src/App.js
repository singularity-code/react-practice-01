import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./component/NewComponent";
import Say from "./component/Say";
import EventPractice from "./component/EventPractice";
import CreateRef from "./component/CreateRef";
import ScrollBox from "./component/ScrollBox";

class App extends Component {
  render() {
    const test = true;
    const style = {
      backgroundColor: "white",
      color: "aqua",
      padding: 30,
    };
    return (
      <div style={style}>
        {test === true ? (
          <div className="App">
            <header className="App-header">
              <p>Test Mode</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <NewComponent name={"Correct Name"} favNum={100}>
                <div>This is a child</div>
              </NewComponent>
              <Say></Say>
              <EventPractice></EventPractice>
              <CreateRef></CreateRef>
              <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
              <button onClick={() => this.scrollBox.scrollToBottom()}>
                Go to Bottom
              </button>
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

export default App;
