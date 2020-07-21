import React from 'react';
import './App.css';
import RegistorForm from './components/RegistorForm';
import CounterFile from './components/CounterFile';
import MouseContainer from './components/MouseContainer';
function App() {
  return (
    <div className="App">
{/* <RegistorForm/> */}
{/* <CounterFile/> */}
<MouseContainer/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
