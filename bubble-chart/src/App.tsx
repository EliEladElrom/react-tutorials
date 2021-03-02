/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import { Button } from '@material-ui/core'
import BubbleChart from './components/BubbleChart/BubbleChart'
import { Types } from './components/BubbleChart/types'

function App() {
  const d: Types.Data[] = [
    { id: 1, name: 'React', size: 350, fillColor: '#D3D3D3' },
    { id: 2, name: 'TypeScript', size: 100, fillColor: '#9d9a9f' },
    { id: 3, name: 'SCSS', size: 75, fillColor: '#605f62' },
    { id: 4, name: 'Recoil', size: 150, fillColor: '#D3D3D3' },
    { id: 5, name: 'Redux', size: 150, fillColor: '#D3D3D3' },
    { id: 6, name: 'Material-UI', size: 125, fillColor: '#c6c5c6' },
    { id: 7, name: 'Router', size: 230, fillColor: '#808080' },
    { id: 8, name: 'Jest', size: 70, fillColor: '#C0C0C0' },
    { id: 9, name: 'Enzym', size: 70, fillColor: '#C0C0C0' },
    { id: 10, name: 'Sinon', size: 70, fillColor: '#C0C0C0' },
    { id: 11, name: 'Puppeteer', size: 70, fillColor: '#C0C0C0' },
    { id: 12, name: 'ESLint', size: 50, fillColor: '#A9A9A9' },
    { id: 13, name: 'Prettier', size: 60, fillColor: '#A9A9A9' },
    { id: 14, name: 'Lodash', size: 70, fillColor: '#DCDCDC' },
    { id: 15, name: 'Moment', size: 80, fillColor: '#DCDCDC' },
    { id: 16, name: 'Classnames', size: 90, fillColor: '#DCDCDC' },
    { id: 17, name: 'Serve', size: 100, fillColor: '#DCDCDC' },
    { id: 18, name: 'Snap', size: 150, fillColor: '#DCDCDC' },
    { id: 19, name: 'Helmet', size: 150, fillColor: '#DCDCDC' },
  ]

  const [data, setData] = React.useState<Types.Data[]>(d.slice(1, 10))

  const changeData = () => {
    setData(d.sort(() => Math.random() - 0.5))
  }

  const selectedKeyHandler = (key: string) => {
    // eslint-disable-next-line no-alert
    alert(key)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button
          className="appButtonFixed"
          variant="contained"
          color="default"
          onClick={() => {
            changeData()
          }}
        >
          Change data
        </Button>
        <BubbleChart bubblesData={data} width={800} height={600} textFillColor="drakgrey" backgroundColor="#ffffff" minValue={1} maxValue={150} selectedCircle={selectedKeyHandler} />
      </header>
    </div>
  )
}

export default App
