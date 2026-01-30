import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships }) => {
  if (!starships.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Starships</h2>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default StarshipList;