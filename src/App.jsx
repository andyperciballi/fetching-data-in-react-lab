import { useState, useEffect } from 'react';
import './App.css';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import { index as getStarships } from './services/starshipService';

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      setLoading(true);
      const results = await getStarships();
      setStarshipsData(results);
      setDisplayedStarships(results);
      setLoading(false);
    };
    fetchStarships();
  }, []);

  const handleSearch = (searchTerm) => {
  const lowerSearch = searchTerm.toLowerCase();

  const filtered = starshipsData.filter((s) =>
    s.name.toLowerCase().includes(lowerSearch) ||
    s.model.toLowerCase().includes(lowerSearch) ||
    s.manufacturer.toLowerCase().includes(lowerSearch) ||
    s.starship_class.toLowerCase().includes(lowerSearch)
  );

  setDisplayedStarships(filtered);
};


  const handleResetSearch = () => {
    setDisplayedStarships(starshipsData);
  };

  if (loading) return <p>Loading starships...</p>;

  return (
    <>
    <h1>Star Wars API</h1>
      <StarshipSearch
        onSearch={handleSearch}
        onReset={handleResetSearch}
        resultCount={displayedStarships.length}
      />
      <StarshipList starships={displayedStarships} />
    </>
  );
};

export default App;