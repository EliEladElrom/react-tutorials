import React from 'react';
import './App.css';
import Header from "./header/header";
import Main from "./main/main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main version="1"/>
    </div>
  );
}

export default App;
