import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Seven } from "../../../moviedata"

const SevenPage = () => {
    return(
        <div className="seven-movie-container">
            <MoviePage MovieName={Seven.MovieName} ReleaseYear={Seven.ReleaseYear} Desc={Seven.Desc} IMDB={Seven.IMDB} Director={Seven.Director} Duration={Seven.Duration} Cast={Seven.Cast} Genre={Seven.Genre} Certification={Seven.Certification} Language={Seven.Language} Distribution={Seven.Distribution} />
        </div>
    );
}

export default SevenPage;