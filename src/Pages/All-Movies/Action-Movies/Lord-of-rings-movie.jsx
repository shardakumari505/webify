import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { LordOfTheRings } from "../../../moviedata";

const LordofRings = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={LordOfTheRings.MovieName} ReleaseYear={LordOfTheRings.ReleaseYear} Desc={LordOfTheRings.Desc} IMDB={LordOfTheRings.IMDB} Director={LordOfTheRings.Director} Duration={LordOfTheRings.Duration} Cast={LordOfTheRings.Cast} Genre={LordOfTheRings.Genre} Certification={LordOfTheRings.Certification} Language={LordOfTheRings.Language} Distribution={LordOfTheRings.Distribution} />
        </div>
    );
}

export default LordofRings;