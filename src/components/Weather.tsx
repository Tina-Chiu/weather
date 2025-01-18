import { WeatherBg } from './WeatherBg'
import { Header } from './Header'
import { WeatherCard } from './WeatherCard'
import { WeeklyForecast } from './WeeklyForecast'
import { WeatherProvider } from './WeatherProvider/WeatherProvider'

export function Weather () {
  return (
    <WeatherProvider>
      <WeatherBg>
        <Header />
        <WeatherCard />
        <WeeklyForecast />
      </WeatherBg>
    </WeatherProvider>
  )
}
