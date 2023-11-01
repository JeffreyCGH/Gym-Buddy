import React from 'react'; // Making sure to import React
import logo from './logo.svg';
import './App.css';
import GymBuddy from './GymBuddy'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GymBuddy />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
