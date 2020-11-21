/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/components/Calculator/Calculator.tsx
*/

import React from 'react'
import './Calculator.scss'
// @ts-ignore
import ImageMapper from 'react-image-mapper'

export const URL = 'calculator.jpg'
export const MAP = {
  name: 'my-map',
  areas: [
    {
      name: '0',
      shape: 'rect',
      coords: [3, 387, 227, 474],
    },
    {
      name: '1',
      shape: 'rect',
      coords: [2, 291, 112, 382],
    },
    {
      name: '2',
      shape: 'rect',
      coords: [116, 290, 227, 382],
    },
    {
      name: '3',
      shape: 'rect',
      coords: [342, 382, 232, 290],
    },
    {
      name: '4',
      shape: 'rect',
      coords: [3, 194, 111, 290],
    },
    {
      name: '5',
      shape: 'rect',
      coords: [115, 193, 227, 290],
    },
    {
      name: '6',
      shape: 'rect',
      coords: [231, 194, 343, 290],
    },
    {
      name: '7',
      shape: 'rect',
      coords: [4, 97, 111, 191],
    },
    {
      name: '8',
      shape: 'rect',
      coords: [115, 99, 227, 191],
    },
    {
      name: '9',
      shape: 'rect',
      coords: [231, 98, 343, 191],
    },
    {
      name: '+',
      shape: 'rect',
      coords: [348, 291, 463, 382],
    },
    {
      name: '-',
      shape: 'rect',
      coords: [348, 195, 463, 290],
    },
    {
      name: '*',
      shape: 'rect',
      coords: [348, 98, 463, 191],
    },
    {
      name: '/',
      shape: 'rect',
      coords: [348, 3, 463, 93],
    },
    {
      name: '=',
      shape: 'rect',
      coords: [348, 387, 463, 474],
    },
  ],
}

export default class Calculator
  extends React.PureComponent<ICalculatorProps, ICalculatorState>
  implements ICalculator {
  constructor(props: ICalculatorProps) {
    super(props)
    this.state = {
      output: 0,
      operatorType: '',
      number1: 0,
      number2: -1,
      LoaderStatus: '',
    }
  }

  componentDidUpdate() {
    this.startLoader(3000)
  }

  startLoader = (seconds: number) => {
    setTimeout(() => {
      this.setState((prevState) => {
        const newState = 'Loading Complete'
        return {
          ...prevState,
          LoaderStatus: newState,
        }
      })
    }, seconds)
  }

  startOver = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        operatorType: '',
        number1: 0,
        number2: -1,
        output: 0,
      }
    })
  }

  calculateTwoNumbers = (num1: number, num2: number, operator: string) => {
    let retVal = 0
    switch (operator) {
      case '+':
        retVal = num1 + num2
        break
      case '-':
        retVal = num1 - num2
        break
      case '*':
        retVal = num1 * num2
        break
      case '/':
        retVal = num1 / num2
        break
      default:
        // eslint-disable-next-line no-alert
        alert('Operator not recognized')
    }
    return retVal
  }

  clicked = (btnName: string) => {
    switch (btnName) {
      case '-':
      case '*':
      case '/':
      case '+':
        this.setState((prevState) => {
          const newState = Number(prevState.output)
          return {
            ...prevState,
            operatorType: btnName,
            number1: newState,
          }
        })
        break
      case '=':
        this.setState((prevState) => {
          const newState = this.calculateTwoNumbers(
            prevState.number1,
            Number(prevState.output),
            prevState.operatorType
          )
          return {
            ...prevState,
            output: newState,
          }
        })
        break
      default:
        this.setState((prevState) => {
          const isFirstDigitNumber2 = prevState.operatorType && prevState.number2 === -1
          const newNumberState = isFirstDigitNumber2 ? 0 : prevState.number2
          const newOutput = isFirstDigitNumber2
            ? Number(btnName)
            : Number(prevState.output + btnName)
          return {
            ...prevState,
            number2: newNumberState,
            output: newOutput,
          }
        })
    }
  }

  render() {
    return (
      <>
        <a href="http://twitter.com/elieladelrom" className="follow">
          @elieladelrom
        </a>
        <h1 className="title">
          {this.props.componentTitle} - Version #{this.props.version}
        </h1>
        <h1 className="subTitle">{this.state.LoaderStatus}</h1>
        <p>
          <button type="submit" id="btn" onClick={this.startOver}>
            Start Over
          </button>
        </p>
        <div className="calculator-output">{this.state.output}</div>
        <ImageMapper
          src={URL}
          map={MAP}
          onClick={(area: { name: string }) => {
            this.clicked(area.name)
          }}
        />
      </>
    )
  }
}

export interface ICalculator extends React.PureComponent<ICalculatorProps, ICalculatorState> {
  startOver?(): void
  calculateTwoNumbers(num1: number, num2: number, operator: string): void
  clicked(btnName: string): void
  startLoader(seconds: number): void
}

interface ICalculatorProps {
  componentTitle: string
  version: string
}

interface ICalculatorState {
  output: number
  operatorType: string
  number1: number
  number2: number
  LoaderStatus: string
}
