/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/Label.tsx
*/

import * as React from 'react'
import * as d3 from 'd3'
import { Dispatch, SetStateAction } from 'react'
import { Types } from './types'

export default class Label extends React.PureComponent<ILabelProps> {
  ref: SVGTextElement | undefined

  componentDidMount() {
    if (this.ref) d3.select(this.ref).data([this.props.node])
  }

  render() {
    return (
      <text
        style={{ cursor: 'pointer' }}
        className="label"
        // eslint-disable-next-line no-return-assign
        ref={(ref: SVGTextElement) => (this.ref = ref)}
        onClick={() => {
          this.props.onNodeSelected(((this.props.node as unknown) as { index: number }).index - 1)
        }}
      >
        {this.props.node.name}
      </text>
    )
  }
}

interface ILabelProps {
  node: Types.node
  onNodeSelected: Dispatch<SetStateAction<number>>
}
