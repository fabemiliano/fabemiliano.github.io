// implement SearchBar component here
import React from 'react';
import '../form.css';


class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input type="text" name="searchText" id="searchText" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="selectedGenre">
          Mostrar somente favoritos:
          <input type="checkbox" name="bookmarkedOnly" id="bookmarkedOnly" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="selectedGenre">
          Filtrar por gênero
          <select id="selectedGenre" name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">
              Todos
            </option>
            <option value="action">
              Ação
            </option>
            <option value="comedy">
              Comédia
            </option>
            <option value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
