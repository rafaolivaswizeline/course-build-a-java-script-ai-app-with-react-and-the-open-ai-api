import { GetLocationResponse } from '../models/get-location-response'
import { GetWeatherResponse } from '../models/get-weather-response'
import { Weather, defaultWeather } from '../models/weather'

const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org'
const OPEN_WEATHER_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY

export const weatherService = {
  async getWeather(query: string | null): Promise<Weather> {
    if (!query) return defaultWeather

    const locationResponse = await fetch(
      `${OPEN_WEATHER_BASE_URL}/geo/1.0/direct?appid=${OPEN_WEATHER_KEY}&q=${query}`,
    )

    const location = (await locationResponse.json()) as GetLocationResponse

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_KEY}` +
        `&lat=${location?.[0]?.lat}&lon=${location?.[0]?.lon}&units=metric`,
    )

    const weather = (await weatherResponse.json()) as GetWeatherResponse

    return {
      temperature: weather?.main?.temp,
      country: location?.[0]?.country,
      state: location?.[0]?.state,
      city: location?.[0]?.name,
      wind: {
        speed: weather?.wind?.speed,
        degrees: weather?.wind?.deg,
      },
    }
  },
}
