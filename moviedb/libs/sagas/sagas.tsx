import {takeEvery,put,takeLatest,call} from 'redux-saga/effects';
import {SEARCH_MOVIE,FETCH_MOVIE, FETCH_MOVIE_SUCCESS,AppActions} from '../types/types';
import api from '../api/api';
import axios from 'axios';
import APIKEY from '../api/APIKEY';
import {moviesSuccess} from '../actions/searchActions';
function* fetchmovie(action){
    try{
        
    //console.log(action.payload);
    //const response = yield api.fetchmovies(action.text);
    const response = yield call(()=>axios({
        method:'get',
        url:`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY.APIKey}&query=${action.payload}&page=1&include_adult=false`,
    }));
    const movies = yield response.data.results;
    //console.log(movies);
    yield put(moviesSuccess(movies));
   // yield put({type:FETCH_MOVIE_SUCCESS,movies:movies});
    }
    catch(error){
        yield console.log(error);
    }
}

/*function* searchmovie(action){
    try{
        console.log(action.payload);
        yield put({type:SEARCH_MOVIE,payload:action.payload});
        //yield put(searchMovie(action.payload));

    }
    catch(error)
    {
        yield console.log(error);
    }
}*/

export default function* waitforFetch() {
  //  yield takeLatest(SEARCH_MOVIE,searchmovie);
    yield takeEvery(FETCH_MOVIE,fetchmovie)
}