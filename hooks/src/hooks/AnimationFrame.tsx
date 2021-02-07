/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/hooks/WindowDimensions.tsx
*/

import { useEffect, useRef } from 'react'

export default (callback: (arg0: ICallback) => void) => {
  const frame = useRef()
  const last = useRef(performance.now())
  const init = useRef(performance.now())

  const animate = () => {
    const now = performance.now()
    const time = (now - init.current) / 1000
    const delta = (now - last.current) / 1000
    callback({ time, delta })
    last.current = now;
    (frame as unknown as IFrame).current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    (frame as unknown as IFrame).current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame((frame as unknown as IFrame).current)
  })
}

interface ICallback {
  time: number
  delta: number
}

interface IFrame {
  current: number
}