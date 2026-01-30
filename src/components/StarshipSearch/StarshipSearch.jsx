import { useState } from 'react';

const StarshipSearch = ({ onSearch, onReset, resultCount }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call search function passed from App
    onSearch(searchTerm);

    // Save previous search
    setPrevSearchTerm(searchTerm);

    // Reset input
    setSearchTerm('');
  };

  const handleReset = () => {
    onReset();
    setPrevSearchTerm('');
  };

  return (
    <div>
      <p className='search-intro'>
        {prevSearchTerm
          ? `Last search: ${prevSearchTerm}`
          : 'Search for a starship by name, class, model, or manufacturer.'}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search starships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>

        <p>
          <strong>Number of results:</strong> {resultCount}
        </p>
      </form>

      {prevSearchTerm && (
        <button className='show-all' onClick={handleReset}>Show all starships</button>
      )}
    </div>
  );
};

export default StarshipSearch;