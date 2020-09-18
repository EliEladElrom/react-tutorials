import React from 'react'
import './ContactPage.scss'
import { Centered } from '../../layout/Centered'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { ContactForm } from '../../components/Contact/ContactForm'
import { contactObject, initContact } from '../../model'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { contactState } from '../../recoil/atoms/contactAtoms'
import { sendEmail } from '../../recoil/selectors/contactSelectors'

function UserInfo() {
  const results = useRecoilValue(sendEmail)
  const getContactState: contactObject = useRecoilValue(contactState)
  return (
    <div>
      Results: {results}. Email: `{getContactState.email}`
    </div>
  )
}

const ContactPage = () => {
  const setContactState = useSetRecoilState(contactState)
  const getContactState: contactObject = useRecoilValue(contactState)
  return <ContactPageInner setContactState={setContactState} getContactState={getContactState} />
}

class ContactPageInner extends React.Component<IContactProps, IContactState> {
  constructor(props: IContactProps) {
    super(props)
    this.state = {
      loading: false,
      values: initContact(),
    }
  }
  onContact = () => {
    console.log('ContagePage.tsx :: onContact :: values :: ' + JSON.stringify(this.state.values))
    this.setState({
      ...this.state,
      loading: true,
    })
    this.props.setContactState(this.state.values as contactObject)
  }
  onUpdateContactFieldHandler = (name: string, value: string) => {
    // console.log('Update name: ' + name + ', value: ' + value)
    let newValues = this.state.values
    newValues[name] = value
    this.setState({
      ...this.state,
      values: newValues,
    })
  }
  render() {
    return (
      <Centered>
        {this.state.loading ? (
          <UserInfo />
        ) : (
          <Card>
            <CardHeader title="Contact" />
            <CardContent>
              <ContactForm
                onContact={this.onContact}
                onUpdateContactField={this.onUpdateContactFieldHandler}
                contactInfo={this.state.values}
                loading={this.state.loading}
              />
            </CardContent>
          </Card>
        )}
      </Centered>
    )
  }
}

interface IContactProps {
  setContactState: any
  getContactState: contactObject
}

interface IContactState {
  loading: boolean
  values: any
}

export default ContactPage
