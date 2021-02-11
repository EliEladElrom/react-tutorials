/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/Node.tsx
*/

import * as React from 'react'
import * as d3 from 'd3'
import { Types } from './types'

export default class Link extends React.PureComponent<ILinkProps> {
  ref: SVGElement | undefined

  componentDidMount() {
    if (this.ref) d3.select(this.ref).data([this.props.link])
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOverHandler(event: React.MouseEvent<SVGLineElement, MouseEvent>, link: ILinkProps) {
    d3.select('.linkGroup')
      .append('text')
      .attr('class', 'linkTextValue')
      .text((link.link.value as string).replace(/(.{50})..+/, '$1…'))
      .attr('x', event.nativeEvent.offsetX)
      .attr('y', event.nativeEvent.offsetY)
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOutHandler() {
    d3.select('.linkTextValue').remove()
  }

  render() {
    return (
      <g className="linkGroup">
        <line
          // eslint-disable-next-line no-return-assign
          ref={(ref: SVGLineElement) => (this.ref = ref)}
          className="link"
          onMouseOver={(event) => {
            this.onMouseOverHandler(event, this.props)
          }}
          onMouseOut={(event) => {
            this.onMouseOutHandler()
          }}
        />
      </g>
    )
  }
}

interface ILinkProps {
  link: Types.link
}
