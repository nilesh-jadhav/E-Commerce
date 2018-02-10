import * as types from '../actions/actionTypes';

export default function moviesReducer(
  state = {
    isFetching: false,
    data: []
  },
  action
) {
  switch (action.type) {
    case types.FETCH_MOVIES_REQUEST:
      return { ...state, isFetching: true };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload.movies,
        isFetching: false
      };

    case types.FETCH_MOVIES_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
