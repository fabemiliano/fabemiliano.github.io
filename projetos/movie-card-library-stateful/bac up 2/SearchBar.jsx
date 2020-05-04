// implement SearchBar component here
import React from 'react';
import '../form.css';

const genres = {
  '': 'Todos',
  action: 'Ação',
  comedy: 'Comédia',
  thriller: 'Suspense',
};
class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.searchBarItens = this.searchBarItens.bind(this);
  }

  searchBarItens(name, text, type, value, checked, callback) {
    return (
      <label htmlFor={this.name}>
        {text}
        <input type={type} id={name} value={value} checked={checked} onChange={callback} />
      </label>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        {this.searchBarItens('search', 'Inclui o texto', 'text', searchText, false, onSearchTextChange)}
        {this.searchBarItens('bookmarkedOnly', 'Mostrar somente favoritos', 'checkbox', '', bookmarkedOnly, onBookmarkedChange)}
        <label htmlFor="selectedGenre">
          Filtrar por Gênero
          <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            {Object.keys(genres).map((el) => <option value={el} key={el}>{genres[el]}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
