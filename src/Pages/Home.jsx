import React from 'react';
import Header from '../Components/Header/Header';
import MovieAdd from '../Components/MovieAdd/MovieAdd';
import MovieFilter from '../Components/MovieFilter/MovieFilter';

const Home = ({setSearch,setRating,setMovies,movies,search,rating}) => {
  return (
    <div>
      <Header setSearch={setSearch} setRating={setRating} />
      <MovieAdd setMovies={setMovies} movies={movies} />
      <MovieFilter search={search} rating={rating} movies={movies} />
    </div>
  )
}

export default Home