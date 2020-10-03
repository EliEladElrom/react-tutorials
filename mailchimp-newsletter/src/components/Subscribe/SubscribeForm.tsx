import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import styles from './SubscribeForm.styles'

class SubscribeFormInner extends React.Component<ISubscribeProps, ISubscribeState> {
  constructor(props: ISubscribeProps) {
    super(props)
    this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    }
  }
  render() {
    return (
      <div className={this.props.classes.container}>
        <form action="https://elielrom.us2.list-manage.com/subscribe/post" method="POST" noValidate>
          <input type="hidden" name="u" value="0f75b3711d3dfb5f9699d8e6b" />
          <input type="hidden" name="id" value="afca93fc51" />
          <TextField
            label="first name"
            margin="normal"
            type="text"
            name="FNAME"
            value={this.state.fNameValue}
            onChange={(e) => {
              this.setState({ fNameValue: e.target.value })
            }}
          />
          <TextField
            label="last name"
            margin="normal"
            type="text"
            name="LNAME"
            value={this.state.lNameValue}
            onChange={(e) => {
              this.setState({ lNameValue: e.target.value })
            }}
          />
          <TextField
            label="email"
            margin="normal"
            name="EMAIL"
            value={this.state.emailValue}
            onChange={(e) => {
              this.setState({ emailValue: e.target.value })
            }}
            autoCapitalize="off"
            autoCorrect="off"
          />
          <p>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="subscribe"
              name="subscribe"
            >
              Subscribe Newsletter
            </Button>
          </p>
        </form>
      </div>
    )
  }
}

interface ISubscribeProps extends WithStyles<typeof styles> {}
interface ISubscribeState {
  emailValue: string
  fNameValue: string
  lNameValue: string
}
export const SubscribeForm = withStyles(styles)(SubscribeFormInner)
