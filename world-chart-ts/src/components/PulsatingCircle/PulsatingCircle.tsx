import React from 'react'
import styled, { keyframes } from 'styled-components'

const circlePulse = (colorOne: string, colorTwo: string) => keyframes`
0% {
  fill:${colorOne};
  stroke-width:20px
}
50% {
  fill:${colorTwo};
  stroke-width:2px
}
100%{
  fill:${colorOne};
  stroke-width:20px
}
`
const StyledInnerCircle = styled.circle`
  animation: ${() => circlePulse('rgb(245,197,170)', 'rgba(242, 121, 53, 1)')} infinite 4s linear;
`

export default function PulsatingCircle(props: IPulsatingCircle) {
  return (
    <>
      <StyledInnerCircle cx={props.cx} cy={props.cy} r="8" stroke="limegreen" stroke-width="5" />
    </>
  )
}

interface IPulsatingCircle {
  cx: number
  cy: number
}
