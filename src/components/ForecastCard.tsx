// import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface ForecastCardProps {
  day: string,
  weatherIcon: string,
  maxTemp: string,
  minTemp: string,
}

export function ForecastCard ({ day, weatherIcon, maxTemp, minTemp }: ForecastCardProps) {
  return (
    <Box
      sx={{
        marginTop: '2rem',
        background: 'var(--card, linear-gradient(180deg, rgba(231, 236, 242, 0.56) 0%, rgba(134, 167, 185, 0.56) 100%))',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '12px 12px 10px 2px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Typography>{day}</Typography>
      <Typography>{weatherIcon}</Typography>
      <Typography>
        最高
        {maxTemp}
      </Typography>
      <Typography>
        最低
        {minTemp}
      </Typography>
    </Box>
  )
}
