import { Weather, defaultWeather } from '../models/weather'

export const weatherService = {
  async getWeather(query: string | null): Promise<Weather> {
    if (!query) return defaultWeather
    const key = import.meta.env.VITE_OPEN_WEATHER_KEY
    const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${query}`)
    const payload = await apiResponse.json()
    console.log(payload)

    return {
      temperature: payload?.main?.temp ? payload.main.temp - 273.15 : null
    }
  }
}
