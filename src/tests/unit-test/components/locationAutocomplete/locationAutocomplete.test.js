import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocationAutocomplete from '../../../../components/locationAutocomplete/locationAutocomplete';

describe('Location Autocomplete component', () => {
  beforeEach(() => cleanup())

  describe("When the location is no correct", () => {
    it('should display error message', async () => {
      const locationRepository = {
        getLocationFromName: jest.fn().mockResolvedValue([]),
      };
  
      render(
        <LocationAutocomplete
          locationRepository={locationRepository}
        />
      );

      // Find the input element and enter some text
      const input = screen.getByPlaceholderText(/Location/i);
      userEvent.type(input, 'A');

      const message = await screen.findByText(/Location not found/i);
      expect(message).toBeInTheDocument();
    })
  });

  describe("When the location is correct", () => {
    it('should not display error message', async () => {
      const locationRepository = {
        getLocationFromName: jest.fn().mockResolvedValue([{
          name: 'London',
          latitude: 0,
          longitude: 0,
        }]),
      };
  
      render(
        <LocationAutocomplete
          locationRepository={locationRepository}
        />
      );

      // Find the input element and enter some text
      const input = screen.getByPlaceholderText(/Location/i);
      userEvent.type(input, 'A');

      const message = screen.queryByText(/Location not found/i);
      expect(message).not.toBeInTheDocument();
    })

    it('should send the location', async () => {
      const handleChangeLocation = jest.fn(() => {});
      const locationRepository = {
        getLocationFromName: jest.fn().mockResolvedValue([{
          name: 'London',
          latitude: 0,
          longitude: 0,
        }]),
      };
  
      render(
        <LocationAutocomplete
          locationRepository={locationRepository}
          onSelectionChange={handleChangeLocation}
        />
      );

      // Find the input element and enter some text
      const input = screen.getByPlaceholderText(/Location/i);
      userEvent.type(input, 'Lon');

      const button = await screen.findByRole('listitem', { name: /London/i });
      userEvent.click(button);

      expect(handleChangeLocation).toBeCalled();

    });

    it('should hide the options', async () => {
      const handleChangeLocation = jest.fn(() => {});
      const locationRepository = {
        getLocationFromName: jest.fn().mockResolvedValue([{
          name: 'London',
          latitude: 0,
          longitude: 0,
        }]),
      };
  
      render(
        <LocationAutocomplete
          locationRepository={locationRepository}
          onSelectionChange={handleChangeLocation}
        />
      );

      // Find the input element and enter some text
      const input = screen.getByPlaceholderText(/Location/i);
      userEvent.type(input, 'Lon');

      const option = await screen.findByRole('listitem', { name: /London/i });
      userEvent.click(option);

      const optionAfterClick = await screen.findByRole('listitem', { name: /London/i });
      expect(optionAfterClick).not.toBeInTheDocument();
    });
  });

});