import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
export default class Movie extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    const API_KEY = '379419a490c5b01ccce63ef7a534e645';
    const endpoint = 'https://api.themoviedb.org/3/movie/299536?api_key=';

    try {
      const res = await fetch(`${endpoint}${API_KEY}`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) { console.log(e); }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <h1>MOVE PAGE</h1>
        <p>Here's a movie!</p>

        <h2>{movie.title}</h2>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </div>
    );
  }
}
