import {SEARCH_MOVIE,FETCH_MOVIE,FETCH_MOVIE_SUCCESS, AppActions} from '../types/types';
import axios from 'axios';
import APIKey from '../api/APIKEY';
import {Dispatch} from 'redux';
export const searchMovie = (text:string) => 
    /*(dispatch:Dispatch<AppActions>)=> {
        dispatch({
            type: SEARCH_MOVIE,
            payload: text
        });
    };*/
    ({ type: SEARCH_MOVIE,payload:text,});

export const fetchMovies = (text: string) => 
({type:FETCH_MOVIE,payload:text,});

export const moviesSuccess = (movies) =>
(
    //console.log(movies),
    {type:FETCH_MOVIE_SUCCESS,payload:movies});

/*(dispatch:Dispatch<AppActions>)=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey.APIKey}&query=${text}&page=1&include_adult=false`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data.results
    }))
    .catch(err => console.log(err))
    //console.log(text);
    
};*/