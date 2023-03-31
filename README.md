# TDD

## Exercise Description
You are tasked with building a weather app that displays the current weather and a five-day forecast for a given location. The app should allow the user to search for a location by city name or zip code and display the weather information for that location.

### Requirements
- The app should display the current weather for the user's current location by default when they first load the app.
- The app should allow the user to search for a location by city name or zip code.
- The app should display the current weather and a five-day forecast for the searched location.
- The app should display an error message if the user's search does not return any results.
- The app should be responsive and display nicely on both desktop and mobile devices.
Technical Details

Use React and the Testing Library to build and test the app.
Use a weather API (such as OpenWeatherMap) to fetch weather data for a given location.
Write tests first using the TDD approach for the following scenarios:

- The app displays the current weather for the user's current location by default when they first load the app.
- The app displays an error message if the user's search does not return any results.
- The app displays the current weather and a five-day forecast for the searched location.
- The app allows the user to search for a location by city name or zip code.

### Bonus

Add additional features to the app, such as the ability to switch between Celsius and Fahrenheit, or display weather information for multiple locations at once.
Implement custom hooks for handling API requests and state management to make the code more reusable and easier to test.