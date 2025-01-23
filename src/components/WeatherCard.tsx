import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useWeather } from './WeatherProvider/useWeather'
import { useCurrentWeather } from '../hooks-api/useCurrentWeather'
import { WeatherIcon } from './WeatherIcon'

export function WeatherCard () {
  const { coordinates: { lat, lon } } = useWeather()
  const { data: currentWeatherData } = useCurrentWeather({ lat, lon })

  const { weather, main, wind, name } = currentWeatherData || {}

  return (
    <Box
      sx={{
        background: 'rgba(98, 128, 166, 0.50)',
        borderRadius: '12px',
        p: '2rem',
        textAlign: 'center',
        width: '80%',
        boxShadow: '12px 12px 10px 2px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1.5rem' }}>{name}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <WeatherIcon iconCode={weather?.[0].icon} />
        <Box>
          <Typography sx={{ fontWeight: 'bold', fontSize: '3rem', margin: '1rem 0' }}>
            {`${Number(main?.temp).toFixed(1)}°C`}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mx: 5, display: 'flex', justifyContent: 'space-around' }}>
        <Grid container spacing={0}>
          {/* 溫度 */}
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: '#ffffff33', mx: 3, maxWidth: '280px', height: '100%', px: 4, borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '5px 5px 0px 6px rgba(244, 244, 244, 0.10)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>最高溫度</Typography>
                <Typography sx={{ fontSize: '24px' }}>
                  {`${Number(main?.temp_max).toFixed(1)}°C`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>最低溫度</Typography>
                <Typography sx={{ fontSize: '24px' }}>
                  {`${Number(main?.temp_min).toFixed(1)}°C`}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 風力，濕度 */}
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: '#ffffff33', mx: 3, maxWidth: '280px', height: '100%', px: 4, py: 2, borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '5px 5px 0px 6px rgba(244, 244, 244, 0.10)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>濕度</Typography>
                <Typography sx={{ fontSize: '24px' }}>
                  {`${main?.humidity}%`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>風力</Typography>
                <Typography sx={{ fontSize: '24px' }}>
                  {`${wind?.speed} m/h`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
