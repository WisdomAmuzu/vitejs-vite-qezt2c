import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
