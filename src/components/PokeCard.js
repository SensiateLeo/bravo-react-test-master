import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { service } from '../services';
import './PokeCard.css'

const PokeCard = ({pokemon}) => {

    const [info, setInfo ] = useState({
        name:"",
        sprites: {
            front_default: "",
            back_default: ""
        },
        id: "",
        weight: "",
        height: ""
    });

    const getPokeInfo = (url) => {
        service.info(url).then((res) => {
            setInfo(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getPokeInfo(pokemon.url);
    }, [pokemon]);

    return(
        <Card id="card" variant="outlined">
            <CardHeader
            title={info.name}
            />
            <CardMedia>
                <img src={info.sprites.front_default} alt="Front"></img>
                <img src={info.sprites.back_default} alt="Back"></img>
            </CardMedia>
            <CardContent>
            <Typography component="p">
                ID: {info.id} <br/>
                Height: {info.height} <br/>
                Weight: {info.weight}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default PokeCard;