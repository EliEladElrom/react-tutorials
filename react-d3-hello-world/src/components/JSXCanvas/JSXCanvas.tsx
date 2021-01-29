/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/JSXCanvas/JSXCanvas.tsx
*/

import React, { RefObject, useEffect, useRef } from 'react'
import './JSXCanvas.scss'

const JSXCanvas = () => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  useEffect(() => {
    draw()
  })

  const draw = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (context) {
      const { devicePixelRatio: ratio = 1 } = window
      context.scale(ratio, ratio)

      context.fillStyle = 'tomato'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }
  }

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  )
}

export default JSXCanvas
