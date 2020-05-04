// implement SearchBar component here
import React from 'react';
import '../form.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: 'Ação',
    };
  }

  // onSearchTextChange(event) {
  //   const { name, value } = event.target
  //   console.log(name, value)
  // }


  onSearchTextChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value })
  }

  onBookmarkedChange = (event) => {
    const name = event.target.name;
    let value = event.target.checked;
    this.setState({[name]:value})
  }

  onSelectedGenreChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value})
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input type="text" name="searchText" id="searchText" value={searchText} onChange={this.onSearchTextChange} />
        </label>
        <label htmlFor="selectedGenre">
          Mostrar somente favoritos:
          <input type="checkbox" name="bookmarkedOnly" id="bookmarkedOnly" checked={bookmarkedOnly} onChange={this.onBookmarkedChange} />
        </label>
        <label htmlFor="selectedGenre" >
          <select id="selectedGenre" name="selectedGenre" value={selectedGenre} onChange={this.onSelectedGenreChange}>
            <option value="Todos">
              Todos
            </option>
            <option value="Ação">
              Ação
            </option>
            <option value="Comédia">
              Comédia
            </option>
            <option value="suspense">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
