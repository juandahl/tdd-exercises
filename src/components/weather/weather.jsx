import React from "react";
import LocationAutocomplete from "../locationAutocomplete";

const Weather = ({ defaultLocation, locationRepository, weatherRepository }) => {
  // States
  const [location, setLocation] = React.useState(defaultLocation);
  const [weather, setWeather] = React.useState();

  // Effects
  React.useEffect(() => {
    console.log(location);
    if (location && locationRepository) {
      weatherRepository
      .getWeather({ lat: location.lat, lon: location.lng })
      .then(result => {
        setWeather(result);
      });
    }
  }, [location, locationRepository, weatherRepository]);

  return (
    <div>
        <p>Weather forecast</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <label htmlFor="location-input">Location</label>
          <LocationAutocomplete locationRepository={locationRepository} onSelectionChange={setLocation} />
        </div>
        {location && <h1>{location.name}</h1>}

        {weather && (
          <>
            <h5>{`Current Weather: ${weather.description}`}</h5>
            <h5>{`Current Temperature: ${weather.temperature}°`}</h5>
          </>
        )
        }
    </div>
)}

export default Weather;
