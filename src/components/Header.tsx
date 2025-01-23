import { useEffect, useState } from 'react'
import { Stack, TextField, Button, CircularProgress } from '@mui/material'
import { useWeatherGeo } from '../hooks-api/useWeatherGeo'
import { useWeather } from './WeatherProvider/useWeather'
import { type WeatherGeo } from '../types/WeatherGeo'

export function Header () {
  const [city, setCity] = useState<string>('')
  const [cityQuery, setCityQuery] = useState<string>('Taiwan')
  const { searchLoading, setCoordinates, setSearchLoading, setHasWeatherData } = useWeather()

  const handleSearchOnSuccess = (data: WeatherGeo[]) => {
    if (data.length === 0) {
      setHasWeatherData(false)
      return
    }
    setCoordinates({ lat: data?.[0].lat, lon: data?.[0].lon })
  }

  const { isLoading } = useWeatherGeo(cityQuery, (data) => handleSearchOnSuccess(data))

  useEffect(() => {
    setSearchLoading(isLoading)
  }, [isLoading, setSearchLoading])

  return (
    <Stack
      p={1.5}
      justifyContent="flex-end"
      flexDirection="row"
      sx={{
        width: '100%',
        background: 'var(--card-bg, linear-gradient(180deg, rgba(212, 229, 236, 0.56) 0%, rgba(231, 236, 242, 0.56) 100%))',
      }}
    >
      <TextField
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
        variant="outlined"
        disabled={searchLoading || !city}
        sx={{
          height: '40px',
          marginLeft: '1rem',
        }}
        onClick={() => setCityQuery(city)}
      >
        {searchLoading ? <CircularProgress size={32} /> : '搜尋'}
      </Button>
    </Stack>
  )
}
