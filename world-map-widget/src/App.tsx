/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import ClientsWidget from './widgets/ClientsWidget/ClientsWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClientsWidget />
      </header>
    </div>
  )
}

export default App
