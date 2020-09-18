import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Counter from './features/Counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="/contact">
          Contact Us
        </a>
        <p />
        <a className="App-link" href="/books">
          Books
        </a>
        <p />
        <Counter />
      </header>
    </div>
  )
}

export default App
