import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {

  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Griaule PokeTest
        </p>
        <Link to="/list" id="button">
          <Button variant="contained" color="secondary">
            Pokémon List
          </Button>
        </Link>
        <br/>
        <Link to="/choosePokemon" id="button">
          <Button variant="contained" color="secondary">
            Choose a initial Pokémon
          </Button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
