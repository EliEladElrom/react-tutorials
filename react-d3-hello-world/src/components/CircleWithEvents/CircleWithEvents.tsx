/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/CircleWithEvents/CircleWithEvents.tsx
*/

import * as React from 'react'
import './CircleWithEvents.scss'

export default class CircleWithEvents extends React.PureComponent<ICircleWithEventsProps> {
  componentDidMount() {
    // TODO
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOverHandler(event: React.MouseEvent<SVGCircleElement, MouseEvent>) {
    // eslint-disable-next-line no-alert
    // alert('onMouseOverHandler')
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseOutHandler() {
    // eslint-disable-next-line no-alert
    // alert('onMouseOutHandler')
  }

  render() {
    return (
      <>
        <svg width="500" height="500">
          <g>
            <circle
              className="circle"
              transform="translate(150 150)"
              r="100"
              onMouseOver={(event) => {
                event.stopPropagation()
                this.onMouseOverHandler(event)
              }}
              onMouseOut={(event) => {
                event.stopPropagation()
                this.onMouseOutHandler()
              }}
              onClick={(event) => {
                event.stopPropagation()
                // eslint-disable-next-line no-alert
                alert('onClick')
              }}
            />
          </g>
        </svg>
      </>
    )
  }
}

interface ICircleWithEventsProps {}
