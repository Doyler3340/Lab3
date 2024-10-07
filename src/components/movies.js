import MovieItem from './MovieItem'; // Import the new component

const Movies = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {/* Use map() to iterate through the movie array and render MovieItem for each */}
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
