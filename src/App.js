import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./newComponent";

function App() {
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
            <img src={logo} className="App-logo" alt="logo" />
            <p>Test Mode</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <NewComponent></NewComponent>
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

export default App;
