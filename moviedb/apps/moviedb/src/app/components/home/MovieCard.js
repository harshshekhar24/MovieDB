import React, { Component } from 'react';
//import 'semantic-ui-css/semantic.min.css';

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="column" >
                {console.log(movie)}
                <img src={'https://image.tmdb.org/t/p/w200'+ movie.poster_path} alt="Poster Unavailale"/>
                <h3>{movie.title} ({movie.release_date})</h3>
            </div>
        )
    }
}

export default MovieCard
