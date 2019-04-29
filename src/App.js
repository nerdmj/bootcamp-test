import React from 'react';
import './App.css';
import FirstComponent from './component/Enzyme/FirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>{`Test Cases in ReactJS using Jest & Enzyme`}</h2>
          <span>Requires JSDOM instead of Real Browser.</span>
          <FirstComponent />
      </header>
    </div>
  );
}

export default App;
