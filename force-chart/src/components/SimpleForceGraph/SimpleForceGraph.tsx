/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/SimpleForceGraph.tsx
*/

import * as React from 'react'
import * as d3 from 'd3'
import './SimpleForceGraph.scss'
import { Simulation, SimulationNodeDatum } from 'd3-force'
import { Dispatch, SetStateAction } from 'react'
import Links from './Links'
import Circles from './Circles'
import Labels from './Labels'
import { Types } from './types'

class SimpleForceGraph extends React.PureComponent<ITopContentPowerChartProps, ITopContentPowerChartState> {
  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined

  constructor(props: ITopContentPowerChartProps) {
    super(props)
    this.state = {
      // EE: the clone data is needed to avoid:
      // TypeError: Cannot add property index, object is not extensible
      clonedData: JSON.parse(JSON.stringify(this.props.data)),
    }
  }

  componentDidMount() {
    this.simulatePositions()
    this.drawTicks()
    this.addZoomCapabilities()
  }

  componentDidUpdate(prevProps: ITopContentPowerChartProps, prevState: ITopContentPowerChartState) {
    this.simulatePositions()
    this.drawTicks()
  }

  simulatePositions = () => {
    this.simulation = d3
      .forceSimulation()
      .nodes(this.state.clonedData?.nodes as SimulationNodeDatum[])
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => {
            return (d as Types.node).name
          })
          .distance(this.props.linkDistance)
          .strength(this.props.linkStrength)
      )
      .force('charge', d3.forceManyBody().strength(this.props.chargeStrength))
      .force('center', d3.forceCenter(this.props.centerWidth, this.props.centerHeight))

    // @ts-ignore
    this.simulation.force('link').links(this.state.clonedData?.links)
  }

  drawTicks = () => {
    const nodes = d3.selectAll('.node')
    const links = d3.selectAll('.link')
    const labels = d3.selectAll('.label')

    if (this.simulation) {
      this.simulation.nodes(this.state.clonedData?.nodes as SimulationNodeDatum[]).on('tick', onTickHandler)
    }

    function onTickHandler() {
      links
        .attr('x1', (d) => {
          return (d as { source: Types.point }).source.x
        })
        .attr('y1', (d) => {
          return (d as { source: Types.point }).source.y
        })
        .attr('x2', (d) => {
          return (d as { target: Types.point }).target.x
        })
        .attr('y2', (d) => {
          return (d as { target: Types.point }).target.y
        })
      nodes
        .attr('cx', (d) => {
          return (d as Types.point).x
        })
        .attr('cy', (d) => {
          return (d as Types.point).y
        })
      labels
        .attr('x', (d) => {
          return (d as Types.point).x + 5
        })
        .attr('y', (d) => {
          return (d as Types.point).y + 5
        })
    }
  }

  addZoomCapabilities = () => {
    const container = d3.select('.container')
    const zoom = d3
      .zoom()
      .scaleExtent([1, 8])
      .translateExtent([
        [100, 100],
        [300, 300],
      ])
      .extent([
        [100, 100],
        [200, 200],
      ])
      .on('zoom', (event) => {
        let { x, y, k } = event.transform
        x = 0
        y = 0
        k *= 1
        container.attr('transform', `translate(${x}, ${y})scale(${k})`).attr('width', this.props.width).attr('height', this.props.height)
      })

    // @ts-ignore
    container.call(zoom)
  }

  restartDrag = () => {
    if (this.simulation) this.simulation.alphaTarget(0.2).restart()
  }

  stopDrag = () => {
    if (this.simulation) this.simulation.alphaTarget(0)
  }

  render() {
    if (JSON.stringify(this.props.data) !== JSON.stringify(this.state.clonedData)) {
      this.setState({
        clonedData: JSON.parse(JSON.stringify(this.props.data)),
      })
    }
    const initialScale = 1
    const initialTranslate = [0, 0]
    const { width, height } = this.props
    return (
      <svg className="container" x={0} y={0} width={width} height={height} transform={`translate(${initialTranslate[0]}, ${initialTranslate[1]})scale(${initialScale})`}>
        <g>
          <Links links={this.state.clonedData?.links as Types.link[]} />
          <Circles nodes={this.state.clonedData?.nodes as Types.node[]} restartDrag={this.restartDrag} stopDrag={this.stopDrag} />
          <Labels nodes={this.state.clonedData?.nodes as Types.node[]} onNodeSelected={this.props.onNodeSelected} />
        </g>
      </svg>
    )
  }
}

interface ITopContentPowerChartProps {
  width: number
  height: number
  data: Types.dataObject
  onNodeSelected: Dispatch<SetStateAction<number>>
  linkDistance: number
  linkStrength: number
  chargeStrength: number
  centerWidth: number
  centerHeight: number
}

interface ITopContentPowerChartState {
  clonedData: Types.dataObject
}

export default SimpleForceGraph
