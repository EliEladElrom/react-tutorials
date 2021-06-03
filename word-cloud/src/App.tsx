/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import logo from './logo.svg'
import './App.scss'
import WordCloudWidget from './widgets/WordCloudWidget/WordCloudWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordCloudWidget />
      </header>
    </div>
  )
}

export default App
