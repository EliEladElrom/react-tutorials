/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/WorldMap/WorldMap.tsx
*/

import React, { useState } from 'react'
import { geoOrthographic, geoPath } from 'd3-geo'
import './WorldMap.scss'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import { Button } from '@material-ui/core'
import AnimationFrame from '../../hooks/AnimationFrame'
import { Types } from './types'

const uuid = require('react-uuid')

const WorldMap = (props: IWorldMapProps) => {
  const [rotation, setRotation] = useState<number>(props.initRotation)
  const [isRotate, setIsRotate] = useState<Boolean>(false)

  const projection = geoOrthographic().scale(props.scale).translate([props.cx, props.cy]).rotate([rotation, 0])

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

  const handleMarkerClick = (i: number) => {
    // eslint-disable-next-line no-alert
    alert(`Marker: ${JSON.stringify(props.coordinatesData[i].id)}`)
  }

  return (
    <>
      <Button
        size="medium"
        color="primary"
        startIcon={<PlayCircleFilledWhiteIcon />}
        onClick={() => {
          setIsRotate(true)
        }}
      />
      <svg width={props.scale * 3} height={props.scale * 3} viewBox="0 0 800 450">
        <g>
          <circle fill="#f2f2f2" cx={props.cx} cy={props.cy} r={props.scale} />
        </g>
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
          {props.coordinatesData?.map((d, i) => (
            <circle
              key={`marker-${uuid()}`}
              cx={returnProjectionValueWhenValid([d.latitude, d.longitude], 0)}
              cy={returnProjectionValueWhenValid([d.latitude, d.longitude], 1)}
              r={5}
              fill="#E91E63"
              stroke="#FFFFFF"
              onClick={() => handleMarkerClick(i)}
              onMouseEnter={() => setIsRotate(false)}
            />
          ))}
        </g>
      </svg>
    </>
  )
}

export default WorldMap

interface IWorldMapProps {
  mapData: Types.MapObject
  coordinatesData: Types.CoordinatesData[]
  scale: number
  cx: number
  cy: number
  initRotation: number
  rotationSpeed: number
}
