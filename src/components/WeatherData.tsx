import { Weather } from '../models/weather'
import './WeatherData.css'

interface Props {
  className?: string
  weather: Weather
}

export default function WeatherData({ className, weather }: Props) {
  return (
    <div id="weather-data-main" className={className}>
      <div id="indicators">
        <p>{`${weather?.city}, ${weather?.state}, ${weather?.country}`}</p>
        <p id="temperature">
          {weather?.temperature
            ? Number.parseFloat(weather.temperature.toFixed(2))
            : null}
          °C
        </p>
        <p>
          {weather?.wind?.speed
            ? Number.parseFloat(
                ((weather.wind.speed * 60 * 60) / 1000).toFixed(2),
              )
            : null}{' '}
          km/h
        </p>
      </div>
      <button id="change-units" className="btn secondary">
        Change units
      </button>
    </div>
  )
}
