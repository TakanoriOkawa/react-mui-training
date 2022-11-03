import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/uis/Button';
import LinkButton from './components/uis/LinkButton';
import CheckBox from './components/uis/CheckBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <LinkButton />
        <CheckBox />
      </header>
    </div>
  );
}

export default App;
