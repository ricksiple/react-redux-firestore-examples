import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'semantic-ui-react'

import { LongTask, UnreliableTask } from './Promise'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Button onClick={() => {
        UnreliableTask()
        .then((result) => { console.log(`Success: ${result}`); return "OK"; })
        .catch((error) => { console.log(`Error:  ${error}`); return "OOPS"; })
        .then((result) => { console.log(`Finally: ${result}`)});
      }} content="Press Me"/>
      </header>
    </div>
  );
}

export default App;
