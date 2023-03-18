import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="header">
        <h1>The BitSignal</h1>
        <img src="/bitcoin@256.png" alt="Bitcoin Logo" />
      </div>

      <div className="progress-wrapper">
        <div className="progress-bar">
          <div className="progress-bar-progress" />
        </div>

        <span className="progress-label">$0</span>
        <span className="progress-label">$1,000,000</span>
      </div>
    </main>
  )
}

export default App
