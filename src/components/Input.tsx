import './Input.css'

interface Props {
  className?: string
}

export default function Input({ className }: Props) {
  return (
    <div id="main" className={className}>
      <h2>Current Weather</h2>
      <form>
        <label htmlFor="query">Enter location:</label>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="City,state code,US (if USA)"
        />
        <input className="primary" type="button" value="Submit" />
      </form>
      <p>
        For USA enter "city,two letters state code,US" eg "Oskaloosa,IA,US". For
        every other country, enter "city,two-letter country code" eg
        "Lillehammer,NO".
      </p>
    </div>
  )
}
