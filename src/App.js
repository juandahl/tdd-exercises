import './App.css';

// Components
import Weather from './components/weather/weather';
// Repositories
import locationRepository from './components/locationAutocomplete/locationRepository';
import weatherRepository from './components/weather/weatherRepository';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather locationRepository={locationRepository} weatherRepository={weatherRepository} />
      </header>
    </div>
  );
}

export default App;
