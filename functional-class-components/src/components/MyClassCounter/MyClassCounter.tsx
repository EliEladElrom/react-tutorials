import React from 'react';

export default class MyClassCounter extends React.Component<IMyClassCounterProps, IMyClassCounterState> {
    constructor(props: IMyClassCounterProps) {
        super(props);
        this.state = {
          count: 0
        }
    }
    render() {
        return (
            <div>
                <p>You clicked MyClassCounter {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click MyClassCounter
                </button>
            </div>
        );
    }
}

interface IMyClassCounterProps {
    // TODO
}

interface IMyClassCounterState {
    count: number
}