import { WeatherBg } from './WeatherBg'
import { Header } from './Header'
import { WeatherCard } from './WeatherCard'
import { WeeklyForecast } from './WeeklyForecast'
import { useWeather } from './WeatherProvider/useWeather'
import { CircularProgress, Stack, Typography } from '@mui/material'

export function WeatherLayout () {
  const { hasWeatherData, searchLoading } = useWeather()

  return (
    <WeatherBg>
      <Header />
      {
        searchLoading && <Stack flex="auto" justifyContent="center">
          <CircularProgress size={60} />
        </Stack>
      }
      {
        hasWeatherData && !searchLoading
          ? <Stack p={4} direction="column" alignItems="center" gap={4}>
            <WeatherCard />
            <WeeklyForecast />
          </Stack>
          : <Typography mt={5} variant="h5">找不到您輸入的城市</Typography>
      }
    </WeatherBg>
  )
}
