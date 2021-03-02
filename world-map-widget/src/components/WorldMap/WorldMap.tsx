/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/WorldMap/WorldMap.tsx
*/

import React, { useState } from 'react'
import { geoEqualEarth, geoPath } from 'd3-geo'
import './WorldMap.scss'
import AnimationFrame from '../../hooks/AnimationFrame'
import { Types } from './types'
import PulsatingCircle from '../PulsatingCircle/PulsatingCircle'
import { clientsObject } from '../../model'

const uuid = require('react-uuid')

const WorldMap = (props: IWorldMapProps) => {
  const [rotation, setRotation] = useState<number>(props.initRotation)
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const [isRotate, setIsRotate] = useState<Boolean>(true)

  const projection = geoEqualEarth().scale(props.scale).translate([props.cx, props.cy]).rotate([rotation, 0])

  AnimationFrame(() => {
    if (isRotate) {
      let newRotation = rotation
      if (rotation >= 360) {
        newRotation = rotation - 360
      }
      setRotation(newRotation + 0.2)
    }
  })

  function returnProjectionValueWhenValid(point: [number, number], index: number) {
    const retVal: [number, number] | null = projection(point)
    if (retVal?.length) {
      return retVal[index]
    }
    return 0
  }

  const handleMarkerClick = (index: number) => {
    props.setSelectedItem(props.clientsData[index])
    setIsRotate(false)
  }

  return (
    <>
      <svg width={props.scale * 3} height={props.scale * 3} viewBox="0 0 800 450" onMouseMove={() => setIsRotate(false)} onMouseOut={() => setIsRotate(true)}>
        <g>
          {(props.mapData.mapFeatures as []).map((d, i) => (
            <path
              key={`path-${uuid()}`}
              d={geoPath().projection(projection)(d) as string}
              fill={`rgba(30,50,50,${(1 / (props.mapData.mapFeatures ? props.mapData.mapFeatures.length : 0)) * i})`}
              stroke="aliceblue"
              strokeWidth={props.rotationSpeed}
            />
          ))}
        </g>
        <g>
          {props.clientsData.map((d, i) => {
            return props.selectedItem.id !== d.id ? (
              <circle
                style={{ cursor: 'pointer' }}
                key={`marker-${uuid()}`}
                cx={returnProjectionValueWhenValid([d.latitude, d.longitude], 0)}
                cy={returnProjectionValueWhenValid([d.latitude, d.longitude], 1)}
                r="8"
                fill="rgba(242, 121, 53, 1)"
                stroke="#FFFFFF"
                onClick={() => handleMarkerClick(i)}
              />
            ) : (
              <PulsatingCircle key={`pulsatingCircle-${uuid()}`} cx={returnProjectionValueWhenValid([d.latitude, d.longitude], 0)} cy={returnProjectionValueWhenValid([d.latitude, d.longitude], 1)} />
            )
          })}
        </g>
      </svg>
    </>
  )
}

export default WorldMap

interface IWorldMapProps {
  mapData: Types.MapObject
  clientsData: Types.ClientData[]
  setSelectedItem: Function
  selectedItem: clientsObject
  scale: number
  cx: number
  cy: number
  initRotation: number
  rotationSpeed: number
}
