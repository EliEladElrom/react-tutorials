/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React, { useEffect, useState } from 'react'
import './App.scss'

// import WorldMapAtlas from './components/WorldMap/WorldMapAtlas'
// import RoundWorldMap from './components/WorldMap/RoundWorldMap'
// import RotatingRoundWorldMap from './components/WorldMap/RotatingRoundWorldMap'
// import RotatingRoundRotatingRoundWorldMapWIthCoordinatesWithCoordinates from './components/WorldMap/RotatingRoundWorldMapWithCoordinates'

import { queue } from 'd3-queue'
import { csv, json } from 'd3-request'
import { FeatureCollection } from 'geojson'
import { feature } from 'topojson-client'
import WorldMap from './components/WorldMap/WorldMap'
import { Types } from './components/WorldMap/types'

function App() {
  const [mapData, setMapData] = useState<Types.MapObject>({ mapFeatures: [] })
  const [coordinatesData, setCoordinatesData] = useState<Types.CoordinatesData[]>([])

  useEffect(() => {
    if (coordinatesData.length === 0) {
      const fileNames = ['./data/world-110m.json', './data/coordinates.csv']
      queue()
        .defer(json, fileNames[0])
        .defer(csv, fileNames[1])
        .await((error, d1, d2: Types.CoordinatesData[]) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log(`Houston we have a problem:${error}`)
          }
          setMapData({ mapFeatures: ((feature(d1, d1.objects.countries) as unknown) as FeatureCollection).features })
          setCoordinatesData(d2)
        })
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        {/*
          <WorldMapAtlas />
          <RoundWorldMap />
          <RotatingRoundWorldMap />
          <RotatingRoundRotatingRoundWorldMapWithCoordinatesWIthCoordinates />
          <WorldMap mapData={mapData} coordinatesData={coordinatesData} scale={200} cx={400} cy={150} initRotation={50} rotationSpeed={0.5} />
        */}
        <WorldMap mapData={mapData} coordinatesData={coordinatesData} scale={200} cx={400} cy={150} initRotation={50} rotationSpeed={0.5} />
      </header>
    </div>
  )
}

export default App
