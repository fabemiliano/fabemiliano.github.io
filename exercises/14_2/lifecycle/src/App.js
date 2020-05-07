import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      hide: ''
    }
  }

  componentDidMount() {
    this.fetchDog();
    alert('Raça')
  }

  shouldComponentUpdate(_, nextState) {
    if (nextState.src.includes('terrier')) return false
    return true
  }

  componentDidUpdate() {
    localStorage.setItem('url',this.state.src)
    
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((result) => result.json())
    .then((result) => {
      this.setState({ src: result.message })
      console.log(this.state.src)
      this.setState({hide: 'hide'})
    })
  }

  render() {
    return (
      <div>
        <h1 className={this.state.hide}>Loading</h1>
        <img src={this.state.src} alt='blablabla' width="400px" />
        <button onClick={()=>this.fetchDog()}>Trocar de Dog</button>
      </div>
    )
  }
}

export default App;
