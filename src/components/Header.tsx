// import React from 'react'
import Box from '@mui/material/Box'

export function Header () {
  return (
    <Box sx={{
      minHeight: '10vh',
      width: '100%',
      background: 'var(--card-bg, linear-gradient(180deg, rgba(212, 229, 236, 0.56) 0%, rgba(231, 236, 242, 0.56) 100%))',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 3,
    }}
    />
  )
}
