import React from "react";
import MovieList from "../MovieList/MovieList";

const MovieFilter = ({ search, movies ,rating }) => {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rating 
  );

  return (
    <div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default MovieFilter;
