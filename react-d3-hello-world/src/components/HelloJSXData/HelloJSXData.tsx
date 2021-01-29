/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloJSXData/HelloJSXData.tsx
*/

import React from 'react'
import './HelloJSXData.scss'

const HelloJSXData = (props: IHelloJSXDataProps) => {
  return (
    <div className="HelloJSXData">
      {props.data.map((d, index) => (
        <p key={`key-${d}`}>jsx {d}</p>
      ))}
    </div>
  )
}

interface IHelloJSXDataProps {
  data: string[]
}

export default HelloJSXData
