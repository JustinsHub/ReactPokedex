import React from 'react';
import Pokedex from './Pokedex'
import {ourPokemon} from './pokemons'

const App = () => {
  return (
    <div className="App">
      <Pokedex pokemon={ourPokemon} />
    </div>
  );
}

export default App;
