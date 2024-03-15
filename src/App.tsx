import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import WeatherData from './components/WeatherData'
import { Weather, defaultWeather } from './models/weather'

function App() {
  const [weather, setWeather] = useState<Weather>(defaultWeather)

  return (
    <div className="wrapper">
      <Input className="input" setWeather={setWeather}></Input>
      <WeatherData className="result" weather={weather}></WeatherData>
    </div>
  )
}

export default App
