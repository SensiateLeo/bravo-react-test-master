import React, { useState } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import PokeCard from './PokeCard';
import './PokeColumn.css';

const PokeColumn = ({initialPokemon}) => {

    const [ initial, setInitial ] = useState([]);
    const [ prevElement, setPrevElement ] = useState();

    const getData = (e) => {
        setInitial(e.dragData);
        if(prevElement !== undefined) {
            prevElement.style.visibility = 'visible';
        }
        setPrevElement(e.containerElem);
        e.containerElem.style.visibility = 'hidden';
        
    }

    return(
        <div class="PokeColumn">
            <div class = "components">
                <ul class="initialPokemon">
                    {
                        initialPokemon
                        .filter(pokemon => 
                            pokemon.name === "charmander" || 
                            pokemon.name === "bulbasaur" || 
                            pokemon.name === "squirtle")
                        .map((pokemon, idx) => {
                            return(
                                <DragDropContainer targetKey="initial" dragData={pokemon}>
                                    <li class ="item">
                                        <PokeCard key={idx} pokemon={pokemon}/>                     
                                    </li> 
                                </DragDropContainer> 
                            );
                        })
                    }
                </ul>
                <div class="vl"></div>
                <DropTarget targetKey="initial" onHit={getData}>
                    <PokeCard pokemon={initial}/>
                </DropTarget>
                <div class="vl"></div>
            </div>
            <div class = "text">
                {initial.name ? <h2>{initial.name} is your first Pokémon!</h2> : <h2>Choose your first Pokémon!</h2>}
            </div>
        </div>
        
    );
}

export default PokeColumn;