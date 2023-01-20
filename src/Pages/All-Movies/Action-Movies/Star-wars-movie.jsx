import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { StarWars } from "../../../moviedata";

const StarWarsPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={StarWars.MovieName} ReleaseYear={StarWars.ReleaseYear} Desc={StarWars.Desc} IMDB={StarWars.IMDB} Director={StarWars.Director} Duration={StarWars.Duration} Cast={StarWars.Cast} Genre={StarWars.Genre} Certification={StarWars.Certification} Language={StarWars.Language} Distribution={StarWars.Distribution} />
        </div>
    );
}

export default StarWarsPage;