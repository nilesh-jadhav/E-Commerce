import 'isomorphic-fetch';

class Movie {
  static fetchMovie(movieId) {
    return fetch(``)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}
