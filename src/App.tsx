import './assets/styles/App.css'

function App() {
  return (
    <main>
      <div className="header">
        <h1 className="desktop-only">The BitSignal</h1>
        <img className="btc-logo" src="/bitcoin@256.png" alt="Bitcoin Logo" />
      </div>

      <div className="bottom-section">
        <h1 className="tablet-down">The BitSignal</h1>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-bar-progress" />
          </div>
          <div className="progress-labels">
            <span className="progress-label">$0</span>
            <span className="progress-label">$1,000,000</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
