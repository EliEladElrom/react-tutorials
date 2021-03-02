import React from 'react'
import './App.scss'

import { NavLink } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'

import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/EliEladElrom/react-tutorials"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eli Elad Elrom - React Tutorials
        </a>

        <List>
          {[{ name: 'MyPage', url: '/MyPage' }].map((itemObject, index) => (
            <NavLink className="App-link" to={itemObject.url} key={itemObject.url}>
              <ListItem>{itemObject.name}</ListItem>
            </NavLink>
          ))}
        </List>
      </header>
    </div>
  )
}

export default App
