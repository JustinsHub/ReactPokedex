import React from 'react'
import './Pokecard.css'

const Pokecard = ({name, image, type, exp})=>{
    return (
        <div className="Pokecard">
            <div className="Pokecard-wrap">
        <b className="Pokecard-name">Name: {name}</b>
        <img src={image}/>
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
            </div>
        </div>
    )
}

export default Pokecard