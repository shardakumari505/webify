import React from "react";
import './Psycho-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Psycho } from "../../../moviedata";

const PsychoPage = () => {
    return(
        <div className="psycho-movie-container">
            <MoviePage MovieName={Psycho.MovieName} ReleaseYear={Psycho.ReleaseYear} Desc={Psycho.Desc} IMDB={Psycho.IMDB} Director={Psycho.Director} Duration={Psycho.Duration} Cast={Psycho.Cast} Genre={Psycho.Genre} Certification={Psycho.Certification} Language={Psycho.Language} Distribution={Psycho.Distribution} />
        </div>
    );
}

export default PsychoPage;