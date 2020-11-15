// src/components/SpecialButton.tsx

// eslint-disable-next-line max-classes-per-file
import React from 'react'

interface IBaseProps {
  name: string
}

// eslint-disable-next-line react/prefer-stateless-function
class Base<P> extends React.Component<P & IBaseProps, {}> {
  // TODO
}

interface IChildProps extends IBaseProps {
  label: string
  className: string
  handleClick: () => void
}

export class SpecialButton extends Base<IChildProps> {
  render(): JSX.Element {
    return (
      <div>
        <button type="submit" className={this.props.className} onClick={this.props.handleClick}>
          {this.props.label} - {this.props.name}
        </button>
      </div>
    )
  }
}
