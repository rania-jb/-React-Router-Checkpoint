import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
const MovieList = ({movies}) => {

  return (
    <div className="movies">
      {movies.map((movie) => {
        return <MovieCard {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
