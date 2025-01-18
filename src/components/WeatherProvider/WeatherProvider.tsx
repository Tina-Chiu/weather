import { createContext, type Dispatch, type SetStateAction, useMemo, useState, type ReactNode } from 'react'
import { type Coordinates } from '../../types/Coordinates'

interface WeatherContextProps {
  coordinates: Coordinates,
  setCoordinates: Dispatch<SetStateAction<Coordinates>>,
}

export const WeatherContext = createContext<WeatherContextProps | null>(null)

interface WeatherProviderProps {
  children: ReactNode,
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({})

  const contextValue = useMemo(
    () => ({
      coordinates,
      setCoordinates,
    }),
    [coordinates, setCoordinates]
  )

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  )
}
