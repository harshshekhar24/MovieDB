import {SEARCH_MOVIE,FETCH_MOVIE} from './types';

import axios from 'axios';
import {APIKey} from '../APIKey';

export const searchMovie = text => dispatch=> {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${text}&page=1&include_adult=false`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data
    }))
    .catch(err => console.log(err))
    //console.log(text);
    
};