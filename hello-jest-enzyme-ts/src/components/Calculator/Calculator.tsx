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
  extends React.Component<ICalculatorProps, ICalculatorState>
  implements ICalculator {
  constructor(props: ICalculatorProps) {
    super(props)
    this.state = {
      output: 0,
      operatorType: '',
      number1: 0,
      number2: -1,
    }
  }
  startOver = () => {
    this.setState({
      operatorType: '',
      number1: 0,
      number2: -1,
      output: 0,
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
        this.setState({
          operatorType: btnName,
          number1: Number(this.state.output),
        })
        break
      case '=':
        this.setState({
          output: this.calculateTwoNumbers(
            this.state.number1,
            Number(this.state.output),
            this.state.operatorType
          ),
        })
        break
      default:
        let isFirstDigitNumber2 = this.state.operatorType && this.state.number2 === -1
        this.setState({
          number2: isFirstDigitNumber2 ? 0 : this.state.number2,
          output: isFirstDigitNumber2 ? Number(btnName) : Number(this.state.output + btnName),
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
          <p>
            <button id="btn" onClick={this.startOver}>Start Over</button>
          </p>
          <div className="calculator-output">{this.state.output}</div>
          <ImageMapper src={URL} map={MAP} onClick={(area: any) => { this.clicked(area.name) } } />
      </>
    )
  }
}

export interface ICalculator extends React.Component<ICalculatorProps, ICalculatorState> {
  startOver?(): void
  calculateTwoNumbers(num1: number, num2: number, operator: string): void
  clicked(area: any): void
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
}
