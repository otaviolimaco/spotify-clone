import logoSpotify from '../assets/spotify-logo.png';
import {  Link  } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <img src={logoSpotify} alt="Logo Spotify" />
            <Link to="/">
                <h1>Spotify</h1>
            </Link>
        </div>
    )
}

export default Header;