import useSWR from 'swr'
import { WEATHER_API_URL } from '../constants/baseUrls' // 定義的API URL
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'// 自定義的fetcher
import { type CurrentWeather } from '../types/CurrentWeather'// 定義的型別
import { urlWithQueryParams } from '../utils/urlWithQueryParams'// 自定義的fetcher

interface CurrentWeatherProps {
  lat?: number,
  lon?: number,
}

export function useCurrentWeather ({ lat, lon }: CurrentWeatherProps) {
  const key = lat && lon
    ? urlWithQueryParams(`${WEATHER_API_URL}/weather`, { lat, lon })
    : null
  const { data, error, isLoading } = useSWR<CurrentWeather>(key, weatherSWRFetcher)

  return {
    data,
    error,
    isLoading,
  }
}
