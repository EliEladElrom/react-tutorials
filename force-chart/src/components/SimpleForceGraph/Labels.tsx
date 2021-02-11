/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/Labels.tsx
*/

import * as React from 'react'
import { Dispatch, SetStateAction } from 'react'
import Label from './Label'
import { Types } from './types'

const uuid = require('react-uuid')

export default class Labels extends React.PureComponent<ILabelsProps> {
  render() {
    const labels = this.props.nodes.map((node: Types.node) => {
      return <Label key={`label-${uuid()}`} node={node} onNodeSelected={this.props.onNodeSelected} />
    })
    return <g className="labels">{labels}</g>
  }
}

interface ILabelsProps {
  nodes: Types.node[]
  onNodeSelected: Dispatch<SetStateAction<number>>
}
