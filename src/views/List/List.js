import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PokeList from '../../components/PokeList';
import { service } from '../../services';
import './List.css';

const List = () => {

  const [pokemon, setPokemon ] = useState([]);
  const [offset, setOffset ] = useState(0);

  const getPokemons = () => {
    service.list(offset,20).then((res) => {
      setPokemon(res.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const decreaseOffset = () => {
    if(offset >= 20) {
      setOffset(offset - 20);
    } 
  }

  useEffect(() => {
    getPokemons();
  }, [offset]);

  return (
    <div className="List">
      <h1>Pokémon List</h1>
      <div>
        <PokeList pokemon={pokemon}/>
      </div>
      <div id="buttons">
        <Button
          variant="contained" 
          color="secondary"
          onClick={() => decreaseOffset()}>
          Previous
        </Button>
        <Button
          variant="contained" 
          color="secondary"
          onClick={() => setOffset(offset + 20)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default List;