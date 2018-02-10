import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import { fetch_movies } from '../../actions/movieActions';

const CardComponent = styled('div')`
  width: 300px;
  border: 1px solid #c3c3c3;
  margin: 10px;
`
const CardContainerComponent = styled('div')`
  display: flex;
  flex-wrap: wrap;
`
class Properties extends React.Component {
  static getInitialProps() {
    return fetch_movies();
  }

  componentDidMount() {
    const { movies } = this.props;
    console.log(movies, 'cool');
    if (movies.length === 0) {
      fetch_movies();
    }
  }

  render() {
    const { movies } = this.props;
    // console.log(movies);
    return(
      <CardContainerComponent>
        {movies.map(movie =>
          <CardComponent>
            <div>{ movie.title }</div>
            <div><img style={{ 'width':'300px', 'height':'250px' }} src={ movie.medium_cover_image } /></div>
            <div>{ movie.summary }</div>
            <div><span>Language: { movie.language }</span></div>
            <div><span>Year: { movie.year }</span></div>
            <div><span>Rating: { movie.Rating }</span></div>
            <div><span>Duration: { movie.runtime }</span></div>
          </CardComponent>
        )}
      </CardContainerComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.movies.isFetching,
    movies: state.movies.data
  };
};

export default connect(mapStateToProps)(Properties);
