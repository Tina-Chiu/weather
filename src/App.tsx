import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Weather } from './components/Weather'
import { Header } from './components/Header'
import { WeatherCard } from './components/WeatherCard'
import { ForecastCard } from './components/ForecastCard'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: (
            <Weather>
              <Header />
              <WeatherCard />
              <ForecastCard
                day="星期一"
                weatherIcon="晴"
                maxTemp="30"
                minTemp="20"
              />
            </Weather>
          ),
        },
      ],
    },
  ])

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}
