import React from 'react';
import pokemonsData from './data';
import './pokemon.css'


class Pokemon extends React.Component {
  render() {

    return (<div className={'pokedex'}>
      {pokemonsData.map(pokemon => <div className={'pokemon'} key = {pokemon.id}>
        <p>Name: {pokemon.name}</p>
        <p>Type: {pokemon.type}</p>
      <p>Weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        <img src = {pokemon.image} alt="pokemon figure"></img>
      </div>)}
    </div>)
  }
}


export default Pokemon;