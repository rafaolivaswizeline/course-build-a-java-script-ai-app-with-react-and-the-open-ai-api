import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import './Input.css'
import { weatherService } from '../services/weather.service'
import { Weather } from '../models/weather'

interface Props {
  className?: string
  setWeather: Dispatch<SetStateAction<Weather>>
}

export default function Input({ className, setWeather }: Props) {
  const [location, setLocation] = useState<string>('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    weatherService.getWeather(location).then(setWeather)
    setLocation('')
  }

  return (
    <div id="main" className={className}>
      <h2>Current Weather</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="query">Enter location:</label>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="City,state code,US (if USA)"
          value={location ?? ''}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input className="primary" type="submit" value="Submit" />
      </form>
      <p>
        For USA enter "city,two letters state code,US" eg "Oskaloosa,IA,US". For
        every other country, enter "city,two-letter country code" eg
        "Lillehammer,NO".
      </p>
    </div>
  )
}
