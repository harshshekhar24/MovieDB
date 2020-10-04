import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div>
                {console.log(movie)}
        { <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}/>}
                <h3>{movie.title} </h3>
            </div>
        )
    }
}

export default MovieCard
