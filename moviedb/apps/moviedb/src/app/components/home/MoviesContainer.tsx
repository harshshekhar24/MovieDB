import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {
    const { movies } = props;
    let content = "";
    if (movies === undefined) {
      console.log("Unable to find any movies");
    } else {
      content = movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ));
    }
    return <div className="ui divided three column grid" ><div className="movie__container" >{content}</div></div>;
  };
  
  const mapStateToProps = (state) => ({
    movies: state.movies.movies,
  });

  
  export default connect(mapStateToProps)(MoviesContainer);