import React from 'react';

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.state = { value: '' };
  }

  changeInput(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select id="genre" name="genre" value={value} onChange={this.changeInput}>
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
    );
  }
}

export default Genre;
