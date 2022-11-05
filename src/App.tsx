import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/uis/Button';
import LinkButton from './components/uis/LinkButton';
import CheckBox from './components/uis/CheckBox';
import CheckBoxLIst from './components/uis/CheckBoxLIst';
import TextField from './components/uis/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button />
        <LinkButton /> */}
        {/* <CheckBox /> */}
        {/* <CheckBoxLIst></CheckBoxLIst> */}
        <TextField></TextField>

      </header>
    </div>
  );
}

export default App;
