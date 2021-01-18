import React from 'react'
import Pokecard from './Pokecard'
import {pokemonImage} from './pokemons'
import './Pokedex.css'

const Pokedex = ({pokemon})=>{
    return (
    <div className="Pokedex">
        <h1 className="Pokedex-title">Pokedex</h1>
        <ul>
        {
        pokemon.map(p =>{ 
        return <Pokecard key={p.id} name={p.name} image={pokemonImage(p.id)} type={p.type} exp={p.base_experience}/>
        }
    )
}
        </ul>
    </div>
    )
}

export default Pokedex