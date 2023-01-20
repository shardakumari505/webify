import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { LivesofOthers } from "../../../moviedata"

const LivesOfOthersPage = () => {
    return(
        <div className="livesofothers-movie-container">
            <MoviePage MovieName={LivesofOthers.MovieName} ReleaseYear={LivesofOthers.ReleaseYear} Desc={LivesofOthers.Desc} IMDB={LivesofOthers.IMDB} Director={LivesofOthers.Director} Duration={LivesofOthers.Duration} Cast={LivesofOthers.Cast} Genre={LivesofOthers.Genre} Certification={LivesofOthers.Certification} Language={LivesofOthers.Language} Distribution={LivesofOthers.Distribution} />
        </div>
    );
}

export default LivesOfOthersPage;