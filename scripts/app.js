import {fetchFromTMDB} from './tmdb.js';
import {setMovieInfo} from './movie.js';

fetchFromTMDB().then(setMovieInfo);
