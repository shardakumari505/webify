import React from "react";
import './City-lights-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { CityLights } from "../../../moviedata"

const CityLightsPage = () => {
    return(
        <div className="city-lights-movie-container">
            <MoviePage MovieName={CityLights.MovieName} ReleaseYear={CityLights.ReleaseYear} Desc={CityLights.Desc} IMDB={CityLights.IMDB} Director={CityLights.Director} Duration={CityLights.Duration} Cast={CityLights.Cast} Genre={CityLights.Genre} Certification={CityLights.Certification} Language={CityLights.Language} Distribution={CityLights.Distribution} />
        </div>
    );
}

export default CityLightsPage;