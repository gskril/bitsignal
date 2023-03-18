import './assets/styles/App.css'
import { CoingeckoResponse } from './types'
import { useCountdown } from './hooks/useCountdown'
import { useFetch } from './hooks/useFetch'

function App() {
  const countdown = useCountdown()
  const { data, error } = useFetch<CoingeckoResponse>(
    'https://bitcoin-price-kappa.vercel.app/api/price'
  )

  return (
    <main>
      <div className="header">
        <div>
          <h1 className="desktop-only">The BitSignal</h1>
          <span className="desktop-only countdown">{countdown}</span>
        </div>
        <img className="btc-logo" src="/bitcoin@256.png" alt="Bitcoin Logo" />
      </div>

      <div className="bottom-section">
        <div>
          <span className="tablet-down countdown">{countdown}</span>
          <h1 className="tablet-down">The BitSignal</h1>
        </div>

        <div className="progress-wrapper">
          <div className="progress-bar">
            {error || (data && !data.bitcoin) ? (
              <span
                style={{
                  padding: '1rem',
                }}
              >
                Error fetching price
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
