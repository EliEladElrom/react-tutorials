/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import BubbleChart, { dataObject } from './components/BubbleChart/BubbleChart'

function App() {
  const labels: dataObject[] = [
    { id: 0, name: 'React', size: 350, fillColor: '#48e5f3' },
    { id: 1, name: 'TypeScript', size: 100, fillColor: '#360151' },
    { id: 2, name: 'SCSS', size: 75, fillColor: '#957fc4' },
    { id: 3, name: 'Recoil', size: 150, fillColor: '#48e5f3' },
    { id: 3, name: 'Redux', size: 150, fillColor: '#48e5f3' },
    { id: 4, name: 'Material-UI', size: 125, fillColor: '#957fc4' },
    { id: 6, name: 'Router', size: 230, fillColor: '#d97f6f' },
    { id: 7, name: 'Jest', size: 70, fillColor: '#a3e75f' },
    { id: 8, name: 'Enzym', size: 70, fillColor: '#a3e75f' },
    { id: 9, name: 'Sinon', size: 70, fillColor: '#a3e75f' },
    { id: 10, name: 'Puppeteer', size: 70, fillColor: '#a3e75f' },
    { id: 13, name: 'ESLint', size: 50, fillColor: '#42640c' },
    { id: 14, name: 'Prettier', size: 60, fillColor: '#42640c' },
    { id: 15, name: 'Lodash', size: 70, fillColor: '#6b8ae5' },
    { id: 16, name: 'Moment', size: 80, fillColor: '#6b8ae5' },
    { id: 17, name: 'Classnames', size: 90, fillColor: '#6b8ae5' },
    { id: 18, name: 'Serve', size: 100, fillColor: '#6b8ae5' },
    { id: 19, name: 'Snap', size: 150, fillColor: '#6b8ae5' },
    { id: 19, name: 'Helmet', size: 150, fillColor: '#6b8ae5' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <BubbleChart bubblesData={labels} width={700} height={600} textFillColor="drakgrey" backgroundColor="#282c34" minValue={1} maxValue={150} />
      </header>
    </div>
  )
}

export default App
