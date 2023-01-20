import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { SpiderMan } from "../../../moviedata";

const SpidermanPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={SpiderMan.MovieName} ReleaseYear={SpiderMan.ReleaseYear} Desc={SpiderMan.Desc} IMDB={SpiderMan.IMDB} Director={SpiderMan.Director} Duration={SpiderMan.Duration} Cast={SpiderMan.Cast} Genre={SpiderMan.Genre} Certification={SpiderMan.Certification} Language={SpiderMan.Language} Distribution={SpiderMan.Distribution} />
        </div>
    );
}

export default SpidermanPage;