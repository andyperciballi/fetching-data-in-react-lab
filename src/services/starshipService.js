const BASE_URL = 'https://swapi.info/api/starships/';

const index = async () => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error('Failed to fetch starships.');
    }

    const data = await res.json();

    // API returns array directly, so just return it
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Error fetching starships:', err);
    return [];
  }
};

export { index };