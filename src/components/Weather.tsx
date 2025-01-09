import React from 'react'
import Box from '@mui/material/Box'

interface WeatherProps {
  children?: React.ReactNode,
}

export function Weather ({ children }: WeatherProps) {
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundImage: 'url(/assets/images/homepage.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      {children}
    </Box>
  )
}
