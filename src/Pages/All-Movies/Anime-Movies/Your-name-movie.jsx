import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Yourname } from "../../../moviedata";

const YourName = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Yourname.MovieName} ReleaseYear={Yourname.ReleaseYear} Desc={Yourname.Desc} IMDB={Yourname.IMDB} Director={Yourname.Director} Duration={Yourname.Duration} Cast={Yourname.Cast} Genre={Yourname.Genre} Certification={Yourname.Certification} Language={Yourname.Language} Distribution={Yourname.Distribution} />
        </div>
    );
}

export default YourName;