import 'isomorphic-fetch';

import constants from '../constants';

export default class MoviesApi {
  static fetchMovies() {
    return fetch(constants.MOVIES_URL)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}
