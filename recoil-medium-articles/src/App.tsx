import React, { Suspense } from 'react'
import './App.scss'
import Articles from "./components/Articles/Articles";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Suspense fallback={<span>Loading...</span>}>
          <Articles />
          </Suspense>
        </RecoilRoot>
          <p />
      </header>
    </div>
  )
}

export default App
