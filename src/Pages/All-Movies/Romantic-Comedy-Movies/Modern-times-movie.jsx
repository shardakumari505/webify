import React from "react";
import './Modern-times-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { ModernTimes } from "../../../moviedata"

const ModernTimesPage = () => {
    return(
        <div className="modern-times-movie-container">
            <MoviePage MovieName={ModernTimes.MovieName} ReleaseYear={ModernTimes.ReleaseYear} Desc={ModernTimes.Desc} IMDB={ModernTimes.IMDB} Director={ModernTimes.Director} Duration={ModernTimes.Duration} Cast={ModernTimes.Cast} Genre={ModernTimes.Genre} Certification={ModernTimes.Certification} Language={ModernTimes.Language} Distribution={ModernTimes.Distribution} />
        </div>
    );
}

export default ModernTimesPage;