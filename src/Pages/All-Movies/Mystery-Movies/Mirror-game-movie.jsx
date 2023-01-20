import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { MirrorGame } from "../../../moviedata"

const MirrorGamePage = () => {
    return(
        <div className="mirror-game-movie-container">
            <MoviePage MovieName={MirrorGame.MovieName} ReleaseYear={MirrorGame.ReleaseYear} Desc={MirrorGame.Desc} IMDB={MirrorGame.IMDB} Director={MirrorGame.Director} Duration={MirrorGame.Duration} Cast={MirrorGame.Cast} Genre={MirrorGame.Genre} Certification={MirrorGame.Certification} Language={MirrorGame.Language} Distribution={MirrorGame.Distribution} />
        </div>
    );
}

export default MirrorGamePage;