import React from "react";
import _ from "lodash";

const defaultErrorMessage = "Location not found";

const LocationAutocomplete = ({
  locationRepository,
  onSelectionChange,
  errorMessage = defaultErrorMessage,
}) => {
  const [options, setOptions] = React.useState(null);

  const handleChangeLocation = _.debounce(async (event) => {
    const result = await locationRepository.getLocationFromName({ name: event.target.value });

    setOptions(result);
  }, 500);


  return (
    <>
    <div style={{ border: 'solid 1px grey', width: '100%', maxWidth: '500px', borderRadius: 12 }}>
      <input
        type="text"
        onChange={handleChangeLocation}
        placeholder="Location"
        className="form-control"
        aria-label="Location"
        style={{ border: 'none', width: '100%', height: '54px', padding: 0, margin: 0, borderRadius: 12 }}  
      />

      <ul style={{ padding: 0, margin: 0, width: '100%' }}>
        {options && options.map(option => (
          <li
            key={option.name}
            aria-label={option.name}
            onClick={() => {
              onSelectionChange(option);
              setOptions(null);
            }}
            style={{
              borderTop: '1px solid grey', width: '100%', listStyleType: 'none', padding: '10px 0px',
          }}
          >
            {option.name}
          </li>
        ))}        
      </ul>

    </div>
    {options && options.length === 0 && errorMessage}
    </>

)}

export default LocationAutocomplete;
