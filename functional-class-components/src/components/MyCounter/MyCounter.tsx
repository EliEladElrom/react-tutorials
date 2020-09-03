import React, { useState } from 'react'

export const MyCounter: React.FunctionComponent<IMyCounterProps> = (props: IMyCounterProps) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked MyCounter {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click MyCounter
            </button>
        </div>
    )
}
interface IMyCounterProps {
    // TODO
}