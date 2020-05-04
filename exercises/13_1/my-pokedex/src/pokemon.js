import React from 'react';
import pokemonsData from './data';
import './pokemon.css'
import Button from './button'
import TypeButton from './buttontype'


let i = 1
let newpokemonsData = pokemonsData

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: pokemonsData[0].name, type: pokemonsData[0].type, image: pokemonsData[0].image, }
    this.state = { type: "Fire" }
  }



filterPokemon = (event) => {
  console.log(event)
  newpokemonsData = pokemonsData.filter(e => e.type === 'Fire')
  console.log(event)

  this.setState({ name: pokemonsData[i].name, type: pokemonsData[i].type, image: pokemonsData[i].image, })
  if (i < pokemonsData.length - 1) { i += 1; } else { i = 0 }
}

changePokemon = () => {
  this.setState({ name: newpokemonsData[i].name, type: newpokemonsData[i].type, image: newpokemonsData[i].image, })
  if (i < newpokemonsData.length - 1) { i += 1; } else { i = 0 }
}

render() {
  return (
    <div>
      <div>
        <TypeButton click={this.filterPokemon} type="Fire" />
        <TypeButton type="Psych" />
      </div>
      <div className={'pokedex'}>
        <h1>{(this.state.name)}</h1>
        <p>{this.state.type}</p>
        <img src={this.state.image} alt="text" width="100px" />
        <Button click={this.changePokemon} />
        {console.log(this)}
      </div>
    </div>)
}
}



export default Pokemon;