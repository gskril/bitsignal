import useSWR from 'swr'
import { useCallback } from 'react'

interface FetchResponse<T> {
  data: T | undefined
  error: any
  isLoading: boolean
  refetch: () => void
}

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return response.json()
}

export function useFetch<T = any>(url: string): FetchResponse<T> {
  const { data, error, mutate } = useSWR<T>(url, fetcher, {
    refreshInterval: 15 * 1000, // 30 seconds
  })

  const refetch = useCallback(() => {
    mutate()
  }, [mutate])

  return {
    data,
    error,
    isLoading: !error && !data,
    refetch,
  }
}
