import './App.css'
import Input from './components/Input'
import WeatherData from './components/WeatherData'

function App() {
  return (
    <div className="wrapper">
      <Input className="input"></Input>
      <WeatherData className="result"></WeatherData>
    </div>
  )
}

export default App
