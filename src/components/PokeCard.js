import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { service } from '../services';
import './PokeCard.css'

const PokeCard = ({pokemon}) => {

    const pokeballImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

    const [info, setInfo ] = useState([]);

    const getPokeInfo = (url) => {
        service.info(url).then((res) => {
            setInfo(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        if(pokemon != []){
        getPokeInfo(pokemon.url);
        }
    }, [pokemon]);

    return(
        <Card id="card" variant="outlined">
            <CardHeader
            title={info.name ? info.name : "Pokémon"}
            />
            <CardMedia>
                <img src={info.sprites ? info.sprites.front_default : pokeballImage} alt="Front"></img>
                <img src={info.sprites ? info.sprites.back_default : pokeballImage} alt="Back"></img>
            </CardMedia>
            <CardContent>
                <Typography component="p">
                    ID: {info.id  ? info.id : 0} <br/>
                    {info.height  ? "Height: " + info.height : "Here you can see"} <br/>
                    {info.weight  ? "Weight: " + info.weight : "your Pokémon info!"}
                </Typography>
            </CardContent>
        </Card>
    )
    
}

export default PokeCard;