import React from 'react';

class Subtitle extends React.Component {
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
      <label htmlFor="subtitile">
      Subtítulo
        <input type="text" id="subtitle" name="subtitle" value={value} onChange={this.changeInput} />
      </label>
    );
  }
}

export default Subtitle;
