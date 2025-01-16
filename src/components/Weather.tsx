// import React from 'react'
import { WeatherBg } from './WeatherBg'
import { Header } from './Header'
import { WeatherCard } from './WeatherCard'
import { ForecastCard } from './ForecastCard'

interface WeatherProps {
  children?: React.ReactNode,
}

export function Weather ({ children }: WeatherProps) {
  return (
    <WeatherBg>
      <Header />
      <WeatherCard />
      <ForecastCard
        day="明日"
        weatherIcon="☀️"
        maxTemp="25"
        minTemp="15"
      />
      <ForecastCard
        day="明後日"
        weatherIcon="☁️"
        maxTemp="20"
        minTemp="10"
      />
      {children}
    </WeatherBg>
  )
}
