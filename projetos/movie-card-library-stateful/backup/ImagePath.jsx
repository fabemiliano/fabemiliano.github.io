import React from 'react';

class ImagePath extends React.Component {
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
      <label htmlFor="imagepath">
      Imagem
        <input type="text" id="imagepath" name="imagepath" value={value} onChange={this.changeInput} />
      </label>
    );
  }
}

export default ImagePath;
