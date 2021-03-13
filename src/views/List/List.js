import React, { useEffect, useState } from 'react';
import PokeList from '../../components/PokeList';
import { service } from '../../services';
import './List.css';

const List = () => {

  const [pokemon, setPokemon ] = useState([])

  const getPokemons = () => {
    service.list(0,20).then((res) => {
      setPokemon(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getPokemons();
  })

  return (
    <div className="List">
      <PokeList pokemon={pokemon}/>
    </div>
  );
}

export default List;