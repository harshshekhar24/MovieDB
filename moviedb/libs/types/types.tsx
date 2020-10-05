import {statetype} from '../types/stateinit';
export const SEARCH_MOVIE = 'SERACH_MOVIE';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export interface searchMovie{
    type: typeof SEARCH_MOVIE;
    payload: string;
}
export interface fetchMovies{
    type: typeof FETCH_MOVIE;
    payload: statetype[];
}

export type SearchActionTypes = searchMovie | fetchMovies;

export type AppActions = SearchActionTypes;
