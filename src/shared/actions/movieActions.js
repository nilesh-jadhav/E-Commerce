import * as types from "./actionTypes";
import MoviesApi from "../../api/moviesApi";

export const fetch_movies_request = () => {
  return {
    type: types.FETCH_MOVIES_REQUEST,
    payload: {
      isFetching: true
    }
  };
};

export const fetch_movies_failure = () => {
  return {
    type: types.FETCH_MOVIES_FAILURE,
    payload: {
      isFetching: false
    }
  };
};

export const fetch_movies_success = data => {
  return {
    type: types.FETCH_MOVIES_SUCCESS,
    payload: {
      movies: data,
      isFetching: false
    }
  };
};

export const fetch_movies = () => {
  return dispatch => {
    dispatch(fetch_movies_request());
    return MoviesApi.fetchMovies()
      .then(json => {
        console.log(json);
        if (json.status === "ok") {
          dispatch(fetch_movies_success(json.data.movies));
        } else {
          dispatch(fetch_movies_failure());
        }
      })
      .catch(error => {
        dispatch(fetch_movies_failure());
        throw error;
      });
  };
};
