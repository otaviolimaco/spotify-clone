import Player from "../components/Player.jsx";
import {  Link  } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists.js";
import { useEffect, useState } from "react";

function Song() {
    const { id } = useParams();
    const [ idTemp, setIdTemp] = useState('');

    useEffect(() => {
        console.log('pietro', id);
        if (id) {
          setIdTemp(id);
        }
    }, [id])

    const { image, name, duration, artist, audio } = songsArray.filter((currentSongObj) => currentSongObj._id === (idTemp || id))[0];
    const artistObj = artistArray.filter((currentSongObj) => currentSongObj.name === artist)[0];

    const songsArrayFromArtist = songsArray.filter((currentSongsObj) => currentSongsObj.artist === artist);

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length -1));
    const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length -1));
    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

    return (
        <div className="song">
            <div className="song__container">
                <img className="song__image-container" src={image} alt={`Imagem da música ${name}`} />
            </div>
            <div className="song__bar">
                <Link to={`/artist/${artistObj._id}`}>
                    <div className="song__artist-image">
                        <img width={75} height={75} src={artistObj.image} alt={`Imagem do artista ${artist}`} />
                    </div>
                </Link>
                <Player duration={duration} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} audio={audio}/>
                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song;