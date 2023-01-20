import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Grave } from "../../../moviedata";

const GraveofFireflies = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Grave.MovieName} ReleaseYear={Grave.ReleaseYear} Desc={Grave.Desc} IMDB={Grave.IMDB} Director={Grave.Director} Duration={Grave.Duration} Cast={Grave.Cast} Genre={Grave.Genre} Certification={Grave.Certification} Language={Grave.Language} Distribution={Grave.Distribution} />
        </div>
    );
}

export default GraveofFireflies;