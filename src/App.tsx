import './assets/styles/App.css'
import { useFetch } from './hooks/useFetch'
import { CoingeckoResponse } from './types'

function App() {
  const { data, error } = useFetch<CoingeckoResponse>(
    'https://bitcoin-price-kappa.vercel.app/api/price'
  )

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
            {error || (data && !data?.bitcoin.usd) ? (
              <span
                style={{
                  padding: '1rem',
                }}
              >
                Error fetching Bitcoin price :/
              </span>
            ) : (
              <>
                <div
                  className="progress-bar-progress"
                  style={{
                    width: `${
                      data ? (data.bitcoin.usd / 1_000_1000) * 1000 : 0
                    }%`,
                  }}
                />
                {data && (
                  <span className="price-label">
                    {Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(data.bitcoin.usd)}
                  </span>
                )}
              </>
            )}
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
