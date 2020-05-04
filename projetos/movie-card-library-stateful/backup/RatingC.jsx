import React from 'react';

class RatingC extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.state = { value: '' };
  }

  changeInput(event) {
    let { value } = event.target;
    value = parseFloat(value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <label htmlFor="rating">
      Avaliação
        <input type="number" id="rating" name="rating" value={value} onChange={this.changeInput} />
      </label>
    );
  }
}

export default RatingC;
