import axios from 'axios';
import APIKEY from './APIKEY';

const fetchmovies = text =>
{
    return axios({
        method:'get',
        url:`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY.APIKey}&query=${text}&page=1&include_adult=false`,
    });
};

export default {
    fetchmovies: fetchmovies,
};