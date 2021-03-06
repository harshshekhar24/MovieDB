import  {FETCH_MOVIE, SEARCH_MOVIE} from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    //loading: false,
    movie: []
};

export default function(state = initialState, action)
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