import React from "react";
import './Tumbbad-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Tumbbad } from "../../../moviedata"

const TumbbadPage = () => {
    return(
        <div className="tumbbad-movie-container">
            <MoviePage MovieName={Tumbbad.MovieName} ReleaseYear={Tumbbad.ReleaseYear} Desc={Tumbbad.Desc} IMDB={Tumbbad.IMDB} Director={Tumbbad.Director} Duration={Tumbbad.Duration} Cast={Tumbbad.Cast} Genre={Tumbbad.Genre} Certification={Tumbbad.Certification} Language={Tumbbad.Language} Distribution={Tumbbad.Distribution} />
        </div>
    );
}

export default TumbbadPage;