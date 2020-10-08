import {statetype} from '../types/stateinit';
export const SEARCH_MOVIE = 'SERACH_MOVIE';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export interface searchMovie{
    type: typeof SEARCH_MOVIE;
    payload: string;
}
export interface fetchMovies{
    type: typeof FETCH_MOVIE;
    payload: statetype[];
}
export interface moviesSuccess{
    type: typeof FETCH_MOVIE_SUCCESS;
    payload: statetype[];
}

export type SearchActionTypes = searchMovie | fetchMovies | moviesSuccess;

export type AppActions = SearchActionTypes;
