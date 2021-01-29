/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3Data/HelloD3Data.tsx
*/

import React, { useEffect } from 'react'
import './HelloD3Data.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const HelloD3Data = (props: IHelloD3DataProps) => {
  useEffect(() => {
    draw()
  })

  const draw = () => {
    d3.select('.HelloD3Data')
      .selectAll('p')
      .data(props.data)
      .enter()
      .append('p')
      .text((d) => `d3 ${d}`)
  }

  return <div className="HelloD3Data" />
}

interface IHelloD3DataProps {
  data: string[]
}

export default HelloD3Data
