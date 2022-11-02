import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/uis/Button';
import LinkButton from './components/uis/LinkButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <LinkButton />
      </header>
    </div>
  );
}

export default App;
