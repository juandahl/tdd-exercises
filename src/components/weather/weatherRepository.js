const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '04c3fda699e834c547b4fc38accc0b85';

const getWeather = async (city) => {
  const params = `appid=${apiKey}&lat=${city.lat}&lon=${city.lon}`;
  const response = await fetch(`${url}?${params}`);
  const data = await response.json();

  const result = {
    main: data.weather.main,
    description: data.weather[0].description,
    temperature: Math.floor(data.main.temp - 273.15),
  }
  return result;
}

const weatherRepository = {
  getWeather,
};

export default weatherRepository;