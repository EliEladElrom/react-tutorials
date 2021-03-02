/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/
import React from 'react'
import './App.scss'
import SimpleReactVizChart from './components/SimpleReactVizChart/SimpleReactVizChart'

/*
// SimpleLineChart
import { useRecoilValue } from 'recoil'
import SimpleLineChart from './components/SimpleLineChart/SimpleLineChart'
import { Types } from './components/SimpleLineChart/types'
import { getLineData } from './recoil/selectors/lineDataSelectors'

// SimpleBarGraph
import SimpleBarGraph from './components/SimpleBarGraph/SimpleBarGraph'

// SimplePie
import SimplePie from './components/SimplePie/SimplePie'

// SimpleCalendarChart
import { useRecoilValue } from 'recoil'
import SimpleCalendarChart from './components/SimpleCalendarChart/SimpleCalendarChart'
import { getCalendarData } from './recoil/selectors/calendarDataSelectors'

 */

function App() {
  // SimpleLineChart
  // const data = useRecoilValue(getLineData) as Types.Data[]

  // SimpleCalendarChart
  // const data = useRecoilValue(getCalendarData) as { day: string, value: number }[]

  return (
    <div className="App">
      <header className="App-header">
        {/*
          <SimpleLineChart data={data} />
          <SimpleBarGraph />
          <SimplePie />
          <SimpleCalendarChart data={data} />
          <SimpleReactVizChart />
        */}
        <SimpleReactVizChart />
      </header>
    </div>
  )
}

export default App
