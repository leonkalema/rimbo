import axios from 'axios';
import { getMovies as getMoviesAction } from './movieActions';

const API_KEY = '3d29327e7affd43154360ea1f7fb4f96';
const BASE_URL = 'https://api.themoviedb.org/3/discover/tv';



export const getMovies = (page = 1 ) => dispatch => {
    
    axios.get(`${BASE_URL}?api_key=${API_KEY}&page=${page}`)
    
    .then(movies => dispatch(
        
     getMoviesAction(movies.data.results, page)
        )
        )
}

export function receiveMovies(json, page) {
    return {
        
        page,
        payload: json.results.map(movie => movie),
    };
}

export const getMovie = (id) => dispatch => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(movie =>
            dispatch(
                {
                    type: 'GET_MOVIE_SUCCESS',
                    payload: movie.data.results
                })
        )
}




