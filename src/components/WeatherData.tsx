import './WeatherData.css'

interface Props {
  className?: string
}

export default function WeatherData({ className }: Props) {
  return (
    <div id="weather-data-main" className={className}>
      <div id="indicators">
        <p>--, undefined</p>
        <p id="temperature">0.0°C</p>
        <p>0.0 m/s</p>
      </div>
      <button id="change-units" className="btn secondary">
        Change units
      </button>
    </div>
  )
}
