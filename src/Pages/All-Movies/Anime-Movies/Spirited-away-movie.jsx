import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Spiritedaway } from "../../../moviedata";

const SpiritedawayPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Spiritedaway.MovieName} ReleaseYear={Spiritedaway.ReleaseYear} Desc={Spiritedaway.Desc} IMDB={Spiritedaway.IMDB} Director={Spiritedaway.Director} Duration={Spiritedaway.Duration} Cast={Spiritedaway.Cast} Genre={Spiritedaway.Genre} Certification={Spiritedaway.Certification} Language={Spiritedaway.Language} Distribution={Spiritedaway.Distribution} />
        </div>
    );
}

export default SpiritedawayPage;