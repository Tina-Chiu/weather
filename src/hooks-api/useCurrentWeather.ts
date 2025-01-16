import useSWR from 'swr'
import { WEATHER_API_URL } from '../constants/baseUrls'
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'
import { type CurrentWeather } from '../types/CurrentWeather'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'

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
