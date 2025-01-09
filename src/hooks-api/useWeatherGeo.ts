import useSWR from 'swr'
import { WEATHER_GEO_API_URL } from '../constants/baseUrls'
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'
import { type WeatherGeo } from '../types/WeatherGeo'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'

const LIMIT = 5

export function useWeatherGeo (query?: string) {
  const key = query
    ? urlWithQueryParams(WEATHER_GEO_API_URL, { q: query, limit: LIMIT })
    : null
  const { data, error, isLoading } = useSWR<WeatherGeo[]>(key, weatherSWRFetcher)

  return {
    data,
    error,
    isLoading,
  }
}
