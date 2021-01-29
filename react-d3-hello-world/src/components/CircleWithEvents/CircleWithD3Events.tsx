/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/CircleWithEvents/CircleWithD3Events.tsx
*/

import * as React from 'react'
import './CircleWithEvents.scss'
import * as d3 from 'd3'

export default class CircleWithD3Events extends React.PureComponent<ICircleWithD3EventsProps> {
  componentDidMount() {
    this.draw()
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOverHandler(event: React.MouseEvent<SVGCircleElement, MouseEvent>) {
    // eslint-disable-next-line no-alert
    // alert('onMouseOverHandler')
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOutHandler() {
    // eslint-disable-next-line no-alert
    // alert('onMouseOutHandler')
  }

  draw = () => {
    d3.select('svg')
      .append('g')
      .append('circle')
      .attr('transform', 'translate(150, 150)')
      .attr('r', 100)
      .attr('class', 'circle')
      .on('click', () => {
        // eslint-disable-next-line no-alert
        alert('onClick')
      })
      .on('mouseover', (event) => {
        // eslint-disable-next-line no-alert
        this.onMouseOverHandler(event)
      })
      .on('mouseout', (event) => {
        // eslint-disable-next-line no-alert
        this.onMouseOutHandler()
      })
  }

  render() {
    return (
      <>
        <svg id="svg" width="500" height="500" />
      </>
    )
  }
}

interface ICircleWithD3EventsProps {}
