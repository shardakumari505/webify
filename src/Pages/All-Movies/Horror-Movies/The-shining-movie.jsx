import React from "react";
import './The-shining-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Shining } from "../../../moviedata"

const ShiningPage = () => {
    return(
        <div className="shining-movie-container">
            <MoviePage MovieName={Shining.MovieName} ReleaseYear={Shining.ReleaseYear} Desc={Shining.Desc} IMDB={Shining.IMDB} Director={Shining.Director} Duration={Shining.Duration} Cast={Shining.Cast} Genre={Shining.Genre} Certification={Shining.Certification} Language={Shining.Language} Distribution={Shining.Distribution} />
        </div>
    );
}

export default ShiningPage;