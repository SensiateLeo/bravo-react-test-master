import React from 'react';
import PokeCard from './PokeCard';
import './PokeList.css';

const PokeList = ({pokemon}) => {

    return(
        <div id="cards">
            {
                pokemon.map((poke, idx) => 
                    <PokeCard key={idx} pokemon={poke}/>
                )
            }
        </div>
    );
}

export default PokeList;