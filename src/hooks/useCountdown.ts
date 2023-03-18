import { useState, useEffect } from 'react'

export const useCountdown = (): string => {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date(2023, 5, 16)

    const updateCountdown = () => {
      const now = new Date()
      const timeRemaining = targetDate.getTime() - now.getTime()

      if (timeRemaining < 0) {
        setCountdown('90 days is up!')
        return
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return countdown
}
