import React from "react";
import './Forrest-gump-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { ForrestGump } from "../../../moviedata"

const ForrestGumpPage = () => {
    return(
        <div className="forrest-gump-movie-container">
            <MoviePage MovieName={ForrestGump.MovieName} ReleaseYear={ForrestGump.ReleaseYear} Desc={ForrestGump.Desc} IMDB={ForrestGump.IMDB} Director={ForrestGump.Director} Duration={ForrestGump.Duration} Cast={ForrestGump.Cast} Genre={ForrestGump.Genre} Certification={ForrestGump.Certification} Language={ForrestGump.Language} Distribution={ForrestGump.Distribution} />
        </div>
    );
}

export default ForrestGumpPage;