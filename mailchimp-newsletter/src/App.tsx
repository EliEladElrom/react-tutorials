import React from 'react'
import './App.scss'
import { Centered } from './layout/Centered'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { SubscribeForm } from './components/Subscribe/SubscribeForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Centered>
              <Card>
                  <CardHeader title="Signup For Our Newsletter" />
                  <CardContent>
                      <SubscribeForm />
                  </CardContent>
              </Card>
          </Centered>
      </header>
    </div>
  )
}

export default App
