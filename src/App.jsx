import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="card">
        
       <div className="playground">
          <div className="timeline">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>

          </div>
          <div className="content">
          <div className="line-content"></div>
          <div className="circle-content"><p>timeline 1</p></div>
          <div className="line-content"></div>
          <div className="circle-content"><p>timeline 2</p></div>
          <div className="line-content"></div>
          <div className="circle-content"><p>timeline 3</p></div>
          <div className="line-content"></div>
          <div className="circle-content"><p>timeline 4</p></div>
          </div>
       </div>
      </div>
      
    </div>
  )
}

export default App
