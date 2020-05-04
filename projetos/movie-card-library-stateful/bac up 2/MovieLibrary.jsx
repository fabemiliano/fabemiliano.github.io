// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import moviesData from '../data';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    const filter = moviesData.filter((el) => el.title.includes(event.target.value)
    || el.subtitle.includes(event.target.value)
    || el.storyline.includes(event.target.value));
    if (filter.length > 0) {
      this.setState({ movies: filter });
    } else {
      this.setState({ movies: this.props.movies });
    }
  }

  onBookmarkedChange(event) {
    const value = event.target.checked;
    this.setState({ bookmarkedOnly: value });
    if (value === true) {
      const filter = moviesData.filter((el) => el.bookmarked === value);
      this.setState({ movies: filter });
    } else { this.setState({ movies: this.props.movies }); }
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
    const filter = moviesData.filter((el) => el.genre === event.target.value);
    if (filter.length > 0) { this.setState({ movies: filter }); }
    if (filter.length === 0) { this.setState({ movies: [] }); }
    if (event.target.value === '') { this.setState({ movies: this.props.movies }); }
  }

  addMovie(movie) {
    console.log(this, movie);
    movie.push(movie);
    this.setState({ movies: moviesData });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
        {console.log(moviesData)}
      </div>
    );
  }
}

export default MovieLibrary;
