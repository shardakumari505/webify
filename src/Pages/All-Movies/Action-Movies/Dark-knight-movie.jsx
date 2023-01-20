import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Darknight } from "../../../moviedata";

const DarkKnight = () => {
    return(
        <div className="movie-main-page">
                 <MoviePage MovieName={Darknight.MovieName} ReleaseYear={Darknight.ReleaseYear} Desc={Darknight.Desc} IMDB={Darknight.IMDB} Director={Darknight.Director} Duration={Darknight.Duration} Cast={Darknight.Cast} Genre={Darknight.Genre} Certification={Darknight.Certification} Language={Darknight.Language} Distribution={Darknight.Distribution} />

        </div>
    );
}

export default DarkKnight;