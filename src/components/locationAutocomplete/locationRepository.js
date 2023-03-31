class LocationRepository {
  constructor() {
    this.url = 'https://api.opencagedata.com/geocode/v1/json';
    this.apiKey = '59be21d464b7488da4f4564720db96ae';
  }

  async getLocationFromName({ name }) {
    const response = await fetch(`${this.url}?q=${name}&key=${this.apiKey}`);
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
}

export default LocationRepository;