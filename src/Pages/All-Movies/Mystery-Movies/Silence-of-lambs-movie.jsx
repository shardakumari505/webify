import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { SilenceofLambs } from "../../../moviedata"

const SilenceofLambsPage = () => {
    return(
        <div className="silenceoflambs-movie-container">
            <MoviePage MovieName={SilenceofLambs.MovieName} ReleaseYear={SilenceofLambs.ReleaseYear} Desc={SilenceofLambs.Desc} IMDB={SilenceofLambs.IMDB} Director={SilenceofLambs.Director} Duration={SilenceofLambs.Duration} Cast={SilenceofLambs.Cast} Genre={SilenceofLambs.Genre} Certification={SilenceofLambs.Certification} Language={SilenceofLambs.Language} Distribution={SilenceofLambs.Distribution} />
        </div>
    );
}

export default SilenceofLambsPage;