import React from 'react';
import '../form.css';
import Title from './Title';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.state = initialState;
  }

  changeInput(event, name) {
    let { value } = event.target;
    if (name === 'rating') { value = parseFloat(value); }
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <Title value={title} />
          {/* <Subtitle />
          <ImagePath />
          <Storyline />
          <RatingC />
          <Genre /> */}
          <label htmlFor="storyline">
            Sinopse
            <textarea id="storyline" name="storyline" value={storyline} onChange={(e) => this.changeInput(e, 'storyline')} />
          </label>
          <label htmlFor="rating">
            Avaliação
            <input type="number" id="rating" name="rating" value={rating} onChange={(e) => this.changeInput(e, 'rating')} />
          </label>
          <label htmlFor="genre">
            Gênero
            <select id="genre" name="genre" value={genre} onChange={(e) => this.changeInput(e, 'genre')}>
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
        <input type="button" onClick={() => { onClick(this.state); this.setState({}); }} />
      </div>
    );
  }
}

export default AddMovie;
