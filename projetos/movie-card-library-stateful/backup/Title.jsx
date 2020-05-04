import React from 'react';

class Title extends React.Component {
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
      <label htmlFor="title">
      Título
        <input type="text" id="title" name="title" value={value} onChange={this.changeInput} />
      </label>
    );
  }
}

export default Title;
