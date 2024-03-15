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
        <p>--, undefined</p>
        <p id="temperature">{Math.floor(weather?.temperature as number)}°C</p>
        <p>0.0 m/s</p>
      </div>
      <button id="change-units" className="btn secondary">
        Change units
      </button>
    </div>
  )
}
