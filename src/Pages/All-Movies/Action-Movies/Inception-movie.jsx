import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Inception } from "../../../moviedata";

const InceptionPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Inception.MovieName} ReleaseYear={Inception.ReleaseYear} Desc={Inception.Desc} IMDB={Inception.IMDB} Director={Inception.Director} Duration={Inception.Duration} Cast={Inception.Cast} Genre={Inception.Genre} Certification={Inception.Certification} Language={Inception.Language} Distribution={Inception.Distribution} />
        </div>
    );
}

export default InceptionPage;