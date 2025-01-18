import { Box } from '@mui/material'
import { ForecastCard } from './ForecastCard'

export function WeeklyForecast () {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: 2,
        marginTop: '2rem',
      }}
    >
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
    </Box>
  )
}
