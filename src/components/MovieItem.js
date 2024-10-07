const MovieItem = ({ movie }) => {
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <h3>{movie.Title} ({movie.Year})</h3>
        <img src={movie.Poster} alt={movie.Title} style={{ width: '150px' }} />
        <p>IMDB ID: {movie.imdbID}</p>
        <p>Type: {movie.Type}</p>
      </div>
      
    );
  };
  
  export default MovieItem;
  