import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  MOVIE_DETAIL,
  LOAD_FAVORITES,
  ADD_LIST
} from "../utils/index.js";
import axios from "axios";

export function addFavorites(movie) {
  return (dispatch, getState) => {
    let getItem = localStorage.getItem("favourite");
    if (getItem) {
      let cloneArr = JSON.parse(getItem);
      cloneArr.push(movie);
      localStorage.setItem("favourite", JSON.stringify(cloneArr));
      dispatch({
        type: "ADD_FAVORITES",
        payload: cloneArr
      });
    } else {
      let arr = [movie];
      localStorage.setItem("favourite", JSON.stringify(arr));
      dispatch({
        type: "ADD_FAVORITES",
        payload: arr
      });
    }
  };
}

export function fetchFavorite() {
  return dispatch => {
    let getItem = localStorage.getItem("favourite");
    let cloneArr = JSON.parse(getItem);
    dispatch({ type: ADD_FAVORITES, payload: cloneArr });
  };
}

export function fetchAddList() {
  return dispatch => {
    let getItem = localStorage.getItem("AddLike");
    let cloneArr = JSON.parse(getItem);
    dispatch({ type: ADD_LIST, payload: cloneArr });
  };
}

export function removeFavorites(movie) {
  return (dispatch, getState) => {
    let getItem = localStorage.getItem("favourite");
    let cloneArr = JSON.parse(getItem);
    if (getItem) {
      cloneArr.map((item, index) => {
        if (item.id === movie) {
          cloneArr.splice(index, 1);
          localStorage.setItem("favourite", JSON.stringify(cloneArr));
        }
      });
      dispatch({
        type: "ADD_FAVORITES",
        payload: cloneArr
      });
    }
  };
}

export function addList(movie) {
  return (dispatch, getState) => {
    let getItem = localStorage.getItem("AddLike");
    if (getItem) {
      let cloneArr = JSON.parse(getItem);
      cloneArr.push(movie);
      dispatch({
        type: "ADD_LIST",
        payload: cloneArr
      });
      localStorage.setItem("AddLike", JSON.stringify(cloneArr));
    } else {
      let arr = [movie];
      localStorage.setItem("AddLike", JSON.stringify(arr));
      dispatch({
        type: "ADD_LIST",
        payload: arr
      });
    }
  };
}

export function removeList(movie) {
  return (dispatch, getState) => {
    let getItem = localStorage.getItem("AddLike");
    if (getItem) {
      let cloneArr = JSON.parse(getItem);
      cloneArr.map((item, index) => {
        if (item.id === movie) {
          cloneArr.splice(index, 1);
          localStorage.setItem("AddLike", JSON.stringify(cloneArr));
        }
      });
      dispatch({
        type: "ADD_LIST",
        payload: cloneArr
      });
    }
  };
}

export function getMovies(movies) {
  return {
    type: "GET_MOVIES_SUCCESS",
    payload: movies
  };
}

export function loadFavorites() {
  return {
    type: LOAD_FAVORITES
  };
}

export const searchData = val => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&query=${val}`
    )

    .then(movies => dispatch({ type: "SEARCH", payload: movies.data.results }));
};
