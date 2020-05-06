import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((result) => result.json())
      .then((result) => {
        this.setState({ src: result.message })
        console.log(this.state.src)
      })
  }

  render() {
    return (
      <div><img src={this.state.src} alt='blablabla' /></div>
    )
  }
}

export default App;
