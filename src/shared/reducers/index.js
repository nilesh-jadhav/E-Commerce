import { combineReducers } from 'redux';

import movies from '../reducers/moviesReducer';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
