/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/Circles.tsx
*/

import * as React from 'react'
import * as d3 from 'd3'
import { D3DragEvent } from 'd3'
import Circle from './Circle'
import { Types } from './types'

const uuid = require('react-uuid')

export default class Circles extends React.PureComponent<ICirclesProps, {}> {
  componentDidMount() {
    this.setMouseEventsListeners()
  }

  componentDidUpdate(prevProps: ICirclesProps) {}

  setMouseEventsListeners = () => {
    const { props } = this
    d3.selectAll('.node')
      // @ts-ignore
      .call(d3.drag<SVGCircleElement, Types.datum>().on('start', onDragStart).on('drag', onDrag).on('end', onDragEnd))

    // @ts-ignore
    function onDragStart(event: D3DragEvent<SVGCircleElement>, d: Types.datum) {
      if (!event.active) {
        props.restartDrag()
      }
      // eslint-disable-next-line no-param-reassign
      d.fx = d.x
      // eslint-disable-next-line no-param-reassign
      d.fy = d.y
    }

    function onDrag(event: D3DragEvent<SVGCircleElement, never, never>, d: Types.datum) {
      // eslint-disable-next-line no-param-reassign
      d.fx = event.x
      // eslint-disable-next-line no-param-reassign
      d.fy = event.y
    }

    function onDragEnd(event: D3DragEvent<SVGCircleElement, never, never>, d: Types.datum) {
      if (!event.active) {
        props.stopDrag()
      }
      // eslint-disable-next-line no-param-reassign
      d.fx = null
      // eslint-disable-next-line no-param-reassign
      d.fy = null
    }
  }

  render() {
    const nodes = this.props.nodes.map((node: Types.node) => {
      return <Circle key={`node-${uuid()}`} node={node} />
    })
    return <g className="nodes">{nodes}</g>
  }
}

interface ICirclesProps {
  nodes: Types.node[]
  restartDrag: () => void
  stopDrag: () => void
}
