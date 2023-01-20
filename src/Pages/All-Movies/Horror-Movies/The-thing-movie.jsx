import React from "react";
import './The-thing-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Thing } from "../../../moviedata"

const TheThing = () => {
    return(
        <div className="thing-movie-container">
            <MoviePage MovieName={Thing.MovieName} ReleaseYear={Thing.ReleaseYear} Desc={Thing.Desc} IMDB={Thing.IMDB} Director={Thing.Director} Duration={Thing.Duration} Cast={Thing.Cast} Genre={Thing.Genre} Certification={Thing.Certification} Language={Thing.Language} Distribution={Thing.Distribution} />
        </div>
    );
}

export default TheThing;