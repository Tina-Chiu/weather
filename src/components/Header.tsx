import { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import { useWeatherGeo } from '../hooks-api/useWeatherGeo'
import { useCurrentWeather } from '../hooks-api/useCurrentWeather'

export function Header () {
  const [city, setCity] = useState<string>('')
  const [cityParam, setCityParam] = useState<string>('')
  const { data } = useWeatherGeo(cityParam)

  const lat = data?.[0].lat
  const lon = data?.[0].lon

  const { data: currentWeatherData } = useCurrentWeather({ lat, lon })

  console.log(currentWeatherData?.weather)

  return (
    <Stack
      p={1.5}
      alignItems="flex-end"
      flexDirection="row"
      sx={{
        maxHeight: '68px',
        width: '100%',
        background: 'var(--card-bg, linear-gradient(180deg, rgba(212, 229, 236, 0.56) 0%, rgba(231, 236, 242, 0.56) 100%))',
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: '400px',
          height: '40px',
          '& .MuiInputBase-root': {
            height: '40px',
          },
        }}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          height: '40px',
          marginLeft: '1rem',
        }}
        onClick={() => setCityParam(city)}
      >
        搜尋
      </Button>
    </Stack>
  )
}
