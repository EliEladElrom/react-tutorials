/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/Links.tsx
*/

import * as React from 'react'
import Link from './Link'
import { Types } from './types'

const uuid = require('react-uuid')

export default class Links extends React.PureComponent<{ links: Types.link[] }> {
  render() {
    const links = this.props.links.map((link: Types.link) => {
      return <Link key={`links-${uuid()}`} link={link} />
    })
    return <g className="links">{links}</g>
  }
}
