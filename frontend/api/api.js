import axios from 'axios';

const URL = 'http://localhost:3000';

const resArtist = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtist.data;
export const songsArray = resSongs.data;