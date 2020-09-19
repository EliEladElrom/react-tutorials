/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: ContactForm.tsx
*/

import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { contactObject } from '../../model'
import styles from './ContactForm.styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const ContactFormInner: React.FunctionComponent<IContactFormProps> = (props: IContactFormProps) => {
  const onTextFieldChangeHandler = (fieldId: any) => (e: any) => {
    props.onUpdateContactField(fieldId, e.target.value)
  }
  return (
    <div className={props.classes.container}>
      <TextField
        label="Your Name"
        margin="normal"
        value={props.contactInfo.name}
        onChange={onTextFieldChangeHandler('name')}
      />
      <TextField
        label="Your Email"
        margin="normal"
        value={props.contactInfo.email}
        onChange={onTextFieldChangeHandler('email')}
      />
      <TextField
        label="Your Message"
        margin="normal"
        multiline
        rows={4}
        rowsMax={4}
        value={props.contactInfo.message}
        onChange={onTextFieldChangeHandler('message')}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={props.loading}
        onClick={props.onContact}
      >
        Send Message
        {props.loading && <CircularProgress size={30} color="secondary" />}
      </Button>
    </div>
  )
}
interface IContactFormProps extends WithStyles<typeof styles> {
  onContact: () => void
  onUpdateContactField: (name: string, value: any) => void
  contactInfo: contactObject
  loading: boolean
}
export const ContactForm = withStyles(styles)(ContactFormInner)
