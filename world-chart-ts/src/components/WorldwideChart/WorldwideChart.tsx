/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WorldwideChart/WorldwideChart.tsx
*/

import React from 'react'
import './WorldwideChart.scss'
// @ts-ignore
import uuid from 'react-uuid'
import { geoEqualEarth, geoPath, GeoProjection } from 'd3-geo'
import Grid from '@material-ui/core/Grid'
import { clientsObject, mapObject } from '../../model'
import ClientList from '../ClientList/ClientList'
import ClientListDetail from '../ClientListDetail/ClientListDetail'
import PulsatingCircle from '../PulsatingCircle/PulsatingCircle'

export default class WorldwideChart extends React.PureComponent<IWorldwideChartProps, IWorldwideChartState> {
  constructor(props: IWorldwideChartProps) {
    super(props)
    this.state = {
      rotation: props.initRotation,
      isRotate: true,
      selectedClient: this.props.clientsData[0],
    }
  }

  returnProjectionValueWhenValid = (point: [number, number], index: number, projection: GeoProjection) => {
    const retVal: [number, number] | null = projection(point)
    if (retVal?.length) {
      return retVal[index]
    }
    return 0
  }

  setIsRotate = (newState: boolean) => {
    this.setState((prevState: IWorldwideChartState) => {
      return {
        ...prevState,
        isRotate: newState,
      }
    })
  }

  setSelectedClient = (newState: clientsObject) => {
    this.setState((prevState: IWorldwideChartState) => {
      return {
        ...prevState,
        selectedClient: newState,
      }
    })
  }

  handleMarkerClick = (index: number) => {
    this.setSelectedClient(this.props.clientsData[index])
    this.setIsRotate(false)
  }

  render() {
    const { scale, clientsData, mapData, cx, cy } = this.props
    // geoEqualEarth
    // geoOrthographic
    const projection = geoEqualEarth().scale(scale).translate([cx, cy]).rotate([this.state.rotation, 0])

    // rotate the earth
    window.requestAnimationFrame(() => {
      if (this.state.isRotate) {
        let newRotation = this.state.rotation
        if (this.state.rotation >= 360) {
          newRotation = this.state.rotation - 360
        }
        const value = newRotation + this.props.rotationSpeed
        this.setState((prevState: IWorldwideChartState) => {
          return {
            ...prevState,
            rotation: value,
          }
        })
      }
    })

    return (
      <div className="WorldwideChart">
        <Grid container>
          <Grid item xs={3}>
            <ClientList clientsData={clientsData} setSelectedClient={this.setSelectedClient} />
          </Grid>
          <Grid item xs={8}>
            <svg width={scale * 3} height={scale * 3} viewBox="0 0 800 450" className="worldSvg" onMouseMove={() => this.setIsRotate(false)} onMouseOut={() => this.setIsRotate(true)}>
              <g>
                {(mapData.mapFeatures as []).map((d, i) => (
                  <path
                    key={`path-${uuid()}`}
                    d={geoPath().projection(projection)(d) as string}
                    fill={`rgba(30,50,50,${(1 / (mapData.mapFeatures ? mapData.mapFeatures.length : 0)) * i})`}
                    stroke="aliceblue"
                    strokeWidth={0.5}
                  />
                ))}
              </g>
              <g>
                {clientsData.map((d, i) => {
                  return this.state.selectedClient.id !== d.id ? (
                    <circle
                      key={`marker-${uuid()}`}
                      cx={this.returnProjectionValueWhenValid(d.coordinates, 0, projection)}
                      cy={this.returnProjectionValueWhenValid(d.coordinates, 1, projection)}
                      r="8"
                      fill="rgba(242, 121, 53, 1)"
                      stroke="#FFFFFF"
                      onClick={() => this.handleMarkerClick(i)}
                    />
                  ) : (
                    <PulsatingCircle cx={this.returnProjectionValueWhenValid(d.coordinates, 0, projection)} cy={this.returnProjectionValueWhenValid(d.coordinates, 1, projection)} />
                  )
                })}
              </g>
            </svg>
          </Grid>
        </Grid>
        <ClientListDetail selectedClient={this.state.selectedClient} clientsData={this.props.clientsData} setSelectedClient={this.setSelectedClient} />
      </div>
    )
  }
}

interface IWorldwideChartProps {
  clientsData: clientsObject[]
  mapData: mapObject
  scale: number
  cx: number
  cy: number
  initRotation: number
  rotationSpeed: number
}

interface IWorldwideChartState {
  rotation: number
  isRotate: boolean
  selectedClient: clientsObject
}
