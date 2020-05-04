import React from 'react';

class Storyline extends React.Component {
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
      <label htmlFor="storyline">
      Sinopse
        <textarea type="text" id="storyline" name="storyline" value={value} onChange={this.changeInput} />
      </label>
    );
  }
}

export default Storyline;
