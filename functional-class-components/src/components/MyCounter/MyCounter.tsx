// src/components/MyCounter/MyCounter.tsx
import React, { useState } from 'react'

export const MyCounter: React.FunctionComponent<IMyCounterProps> = (props: IMyCounterProps) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>You clicked MyCounter {count} times</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Click MyCounter
      </button>
    </>
  )
}
interface IMyCounterProps {
  // TODO
}
