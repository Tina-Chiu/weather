// import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export function WeatherCard () {
  return (
    <Box
      sx={{
        marginTop: '2rem',
        background: 'rgba(98, 128, 166, 0.50)',
        borderRadius: '12px',
        p: '2rem',
        textAlign: 'center',
        width: '80%',
        boxShadow: '12px 12px 10px 2px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Typography sx={{ fontSize: '16px' }}>當前溫度</Typography>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1.5rem' }}>台北</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="/path/to/your/image.png"
          alt="Weather Icon"
          sx={{
            width: '50px',
            height: '50px',
          }}
        />
        <Box>
          <Typography sx={{ fontWeight: 'bold', fontSize: '3rem', margin: '1rem 0' }}>
            15°
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mx: 5, display: 'flex', justifyContent: 'space-around' }}>
        <Grid container spacing={0}>
          {/* 風力 */}
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#ffffff33', mx: 3, px: 4, py: 1, borderRadius: '10px', boxShadow: '5px 5px 0px 6px rgba(244, 244, 244, 0.10)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>風力</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>1</span>
                  {' '}
                  級
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>風速</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>11</span>
                  {' '}
                  公里/小時
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>陣風</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>19</span>
                  {' '}
                  公里/小時
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 溫度 */}
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#ffffff33', mx: 3, height: '100%', px: 4, borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '5px 5px 0px 6px rgba(244, 244, 244, 0.10)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>最高溫度</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>31</span>
                  {' '}
                  °C
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>最低溫度</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>9</span>
                  {' '}
                  °C
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 濕度 */}
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#ffffff33', mx: 3, height: '100%', px: 4, py: 2, borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '5px 5px 0px 6px rgba(244, 244, 244, 0.10)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>濕度</Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  <span style={{ fontSize: '24px' }}>90</span>
                  {' '}
                  %
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
