import React from "react";
import './Chhichhore-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Chhichhore } from "../../../moviedata"

const ChhichhorePage = () => {
    return(
        <div className="chhichhore-movie-container">
            <MoviePage MovieName={Chhichhore.MovieName} ReleaseYear={Chhichhore.ReleaseYear} Desc={Chhichhore.Desc} IMDB={Chhichhore.IMDB} Director={Chhichhore.Director} Duration={Chhichhore.Duration} Cast={Chhichhore.Cast} Genre={Chhichhore.Genre} Certification={Chhichhore.Certification} Language={Chhichhore.Language} Distribution={Chhichhore.Distribution} />
        </div>
    );
}

export default ChhichhorePage;