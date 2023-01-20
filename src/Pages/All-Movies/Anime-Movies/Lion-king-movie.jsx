import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { LionKing } from "../../../moviedata";

const LionKingPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={LionKing.MovieName} ReleaseYear={LionKing.ReleaseYear} Desc={LionKing.Desc} IMDB={LionKing.IMDB} Director={LionKing.Director} Duration={LionKing.Duration} Cast={LionKing.Cast} Genre={LionKing.Genre} Certification={LionKing.Certification} Language={LionKing.Language} Distribution={LionKing.Distribution} />
        </div>
    );
}

export default LionKingPage;