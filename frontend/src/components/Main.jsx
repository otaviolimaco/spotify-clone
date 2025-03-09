import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import {  songsArray  } from "../assets/database/songs.js"

function Main({ type }) {
    return (
        <div className="main">
            {type === 'artists' || type === undefined ? ( <ItemList
                title={'Artistas'}
                items={14}
                itemsArray={artistArray}
                path={'/artists'}
                idPath={'/artist'}
            />) : (<></>)}
            
            {type === 'songs' || type === undefined ? (<ItemList
                title={'Músicas'}
                items={18}
                itemsArray={songsArray}
                path={'/songs'}
                idPath={'/song'}
            />) : (<></>)}
        </div>
    )
}

export default Main;