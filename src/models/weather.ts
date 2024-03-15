export interface Weather {
  temperature: number | null
  country: string | null
  state: string | null
  city: string | null
  wind: {
    speed: number | null
    degrees: number | null
  }
}

export const defaultWeather: Weather = {
  temperature: null,
  country: null,
  state: null,
  city: null,
  wind: {
    speed: null,
    degrees: null,
  },
}
