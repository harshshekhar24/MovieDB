import {SEARCH_MOVIE,FETCH_MOVIE, AppActions} from '../types/types';
import axios from 'axios';
import APIKey from '../APIKey';
import {Dispatch} from 'redux';
export const searchMovie = (text:string) => (dispatch:Dispatch<AppActions>)=> {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text: string) => (dispatch:Dispatch<AppActions>)=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey.APIKey}&query=${text}&page=1&include_adult=false`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data.results
    }))
    .catch(err => console.log(err))
    //console.log(text);
    
};