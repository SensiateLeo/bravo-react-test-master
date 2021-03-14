import React, { useState, useEffect } from 'react';
import PokeColumn from '../../components/PokeColumn';
import { service } from '../../services';
import './ChoosePokemon.css';

const ChoosePokemon = () => {

  const [initialPokemon, setInitialPokemon ] = useState([
  ]);

  const getInitialPokemons = () => {
    service.list(0,7).then((res) => {
      setInitialPokemon(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getInitialPokemons();
  }, []);

  return (
    <div className="ChoosePokemon">
      <h1>Choose your first Pokémon</h1>
      <div>
        <PokeColumn initialPokemon={initialPokemon}/>
      </div>
    </div>
  );
}

export default ChoosePokemon;