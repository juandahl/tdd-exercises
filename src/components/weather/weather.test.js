import { render, screen, cleanup } from '@testing-library/react';
import Weather from './weather';
import LocationRepository from '../locationAutocomplete/locationRepository';
import userEvent from '@testing-library/user-event';

jest.mock("../locationAutocomplete/locationRepository");

const mockGet = {
  main: "Rain",
  description: "moderate rain",
  temperature: 20,
}                        


describe('Weather component', () => {
  beforeEach(() => cleanup())

  it('When location is selected should display the name', async () => {
    const weatherRepository = {
      getWeather: jest.fn().mockResolvedValue(mockGet)
    }

    const locationRepository = new LocationRepository();
    locationRepository.getLocationFromName.mockResolvedValue([{
      name: 'London',
      latitude: 0,
      longitude: 0,
    }]);

    render(
      <Weather
        locationRepository={locationRepository}
        weatherRepository={weatherRepository}
      />
    );

    // Find the input element and enter some text
    const input = screen.getByPlaceholderText(/Location/i);
    userEvent.type(input, 'Lon');

    const button = await screen.findByRole('listitem', { name: /London/i });
    userEvent.click(button);

    const title = await screen.findByRole('heading', { name: /London/i });
    expect(title).toBeInTheDocument();
  })

  it('When location is not selected should not display the weather', async () => {
    const weatherRepository = {
      getWeather: jest.fn().mockResolvedValue(mockGet)
    }

    const locationRepository = new LocationRepository();
    locationRepository.getLocationFromName.mockResolvedValue([{
      name: 'London',
      latitude: 0,
      longitude: 0,
    }]);

    render(
      <Weather
        locationRepository={locationRepository}
        weatherRepository={weatherRepository}
      />
    );

    const input = screen.getByPlaceholderText(/Location/i);
    userEvent.type(input, 'Lon');

    const button = await screen.findByRole('listitem', { name: /London/i });
    userEvent.click(button);

    const currentText = await screen.findByText(/current weather: /i);
    expect(currentText).toHaveTextContent(/moderate rain/i);

    const currentTemp = await screen.findByText(/current temperature: /i);
    expect(currentTemp).toHaveTextContent(/20°/i);
  })

});