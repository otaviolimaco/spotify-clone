import SongItem from './SongItem';
import { useState } from 'react';

function SongList({ songsArray }) {
    const [items, setItems] = useState(5);

    const handleSeeMore = () => {
        const newItems = items + 5;
        setItems(newItems);
    };

    return (
        <div className="song-list">
            {songsArray.slice(0, items).map((currentSongObj, index) => (
                <SongItem {...currentSongObj} index={index} key={index} />
            ))}
            {items <= 10 && (
                <p
                    className="song-list__see-more"
                    onClick={handleSeeMore}
                    style={{ display: items + 5 > 10 ? 'none' : 'block' }}
                >
                    Ver mais
                </p>
            )}
        </div>
    );
}

export default SongList;
