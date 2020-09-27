import React, { Suspense } from 'react'
import './App.scss'
import {RecoilRoot} from "recoil";
import Testimonials from "./components/Testimonals/Testimonals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Suspense fallback={<span>Loading...</span>}>
          <Testimonials />
          </Suspense>
        </RecoilRoot>
          <p />
      </header>
    </div>
  )
}

export default App
