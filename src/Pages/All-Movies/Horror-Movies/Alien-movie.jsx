import React from "react";
import './Alien-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Alien } from "../../../moviedata";

const AlienPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Alien.MovieName} ReleaseYear={Alien.ReleaseYear} Desc={Alien.Desc} IMDB={Alien.IMDB} Director={Alien.Director} Duration={Alien.Duration} Cast={Alien.Cast} Genre={Alien.Genre} Certification={Alien.Certification} Language={Alien.Language} Distribution={Alien.Distribution} />
        </div>
    );
}

export default AlienPage;