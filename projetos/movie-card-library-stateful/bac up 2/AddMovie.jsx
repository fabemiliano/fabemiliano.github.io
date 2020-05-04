import React from 'react';
import '../form.css';

const genres = {
  action: 'Ação',
  comedy: 'Comédia',
  thriller: 'Suspense',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  changeInput(event, name) {
    console.log(event.target)
    let { value } = event.target;
    if (name === 'rating') { value = parseFloat(value); }
    this.setState({ [name]: value });
  }

  renderTitle(name, value, label, type) {
    return (
      <label htmlFor={name}>
        {label}
        <input type={type} id={name} value={value} onChange={(e) => this.changeInput(e, name)} />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.renderTitle('title', title, 'Título', 'text')}
          {this.renderTitle('subtitle', subtitle, 'Subtítulo', 'text')}
          {this.renderTitle('imagePath', imagePath, 'Imagem', 'text')}
          <label htmlFor="storyline">
            Sinopse
            <textarea id="storyline" name="storyline" value={storyline} onChange={(e) => this.changeInput(e, 'storyline')} />
          </label>
          {this.renderTitle('rating', rating, 'Avaliação', 'number')}
          <label htmlFor="genre">
            Gênero
            <select id="genre" name="genre" value={genre} onChange={(e) => this.changeInput(e, 'genre')}>
              {Object.keys(genres).map((e) => <option value={e} key={e}>{genres[e]}</option>)}
            </select>
          </label>
          <button type="submit" onClick={() => { onClick(this.state); this.setState(this.baseState); }}>
          Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
