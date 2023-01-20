import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Matrix } from "../../../moviedata";

const MatrixPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Matrix.MovieName} ReleaseYear={Matrix.ReleaseYear} Desc={Matrix.Desc} IMDB={Matrix.IMDB} Director={Matrix.Director} Duration={Matrix.Duration} Cast={Matrix.Cast} Genre={Matrix.Genre} Certification={Matrix.Certification} Language={Matrix.Language} Distribution={Matrix.Distribution} />
        </div>
    );
}

export default MatrixPage;