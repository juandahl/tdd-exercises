const url = 'https://api.opencagedata.com/geocode/v1/json';
const apiKey = '59be21d464b7488da4f4564720db96ae';

const getLocationFromName = async ({ name }) => {
  const response = await fetch(`${url}?q=${name}&key=${apiKey}`);
  const data = await response.json();

  if (data.results.length === 0) {
    return [];
  }
  return data.results.map(({ formatted, geometry }) => ({
    ...geometry,
    name: formatted
  }))
  ;
}
const locationRepository = {
  getLocationFromName,
}

export default locationRepository;