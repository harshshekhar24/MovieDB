//import { stateinit } from 'libs/types/stateinit';
import  {FETCH_MOVIE, SEARCH_MOVIE, SearchActionTypes} from '../types/types';
import {statetype} from '../types/stateinit'; 
//const initialState = {
  //  text: '',
    //movies: [],
   // movie: []
//};
const initialState: statetype[] = [];

export default function(state = initialState, action:SearchActionTypes)
{
    //console.log(action.payload);
    switch (action.type) {
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                //loading: false
            }
        case  FETCH_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}