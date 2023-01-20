import React from "react";
import './Life-is-beautiful-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { LifeIsBeautiful } from "../../../moviedata"

const LifeIsBeautifulPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={LifeIsBeautiful.MovieName} ReleaseYear={LifeIsBeautiful.ReleaseYear} Desc={LifeIsBeautiful.Desc} IMDB={LifeIsBeautiful.IMDB} Director={LifeIsBeautiful.Director} Duration={LifeIsBeautiful.Duration} Cast={LifeIsBeautiful.Cast} Genre={LifeIsBeautiful.Genre} Certification={LifeIsBeautiful.Certification} Language={LifeIsBeautiful.Language} Distribution={LifeIsBeautiful.Distribution} />
        </div>
    );
}

export default LifeIsBeautifulPage;