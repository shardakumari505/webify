import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { RearWindow } from "../../../moviedata"

const RearWindowPage = () => {
    return(
        <div className="rear-window-movie-container">
            <MoviePage MovieName={RearWindow.MovieName} ReleaseYear={RearWindow.ReleaseYear} Desc={RearWindow.Desc} IMDB={RearWindow.IMDB} Director={RearWindow.Director} Duration={RearWindow.Duration} Cast={RearWindow.Cast} Genre={RearWindow.Genre} Certification={RearWindow.Certification} Language={RearWindow.Language} Distribution={RearWindow.Distribution} />
        </div>
    );
}

export default RearWindowPage;