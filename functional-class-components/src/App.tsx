import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {MyCounter} from "./components/MyCounter/MyCounter";
import MyClassCounter from "./components/MyClassCounter/MyClassCounter";
import {SpecialButton} from "./components/SpecialButton/SpecialButton";

function App() {
  const [count, setCount] = useState(0);
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>You clicked {count} times</p>

          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>

          <MyCounter />
          <MyClassCounter />

          <SpecialButton className={'specialButton'}
                         label={'Special'}
                         name={'Button'}
                         handleClick={() => setCount(count + 1)} />

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
  )
}

export default App
