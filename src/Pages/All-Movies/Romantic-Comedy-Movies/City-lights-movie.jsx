import React from "react";
import './City-lights-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { Chhichhore, CityLights, ForrestGump, LifeIsBeautiful, ModernTimes } from "../../../moviedata"


const CityLightsPage = () => {
    return(
        <div className="city-lights-movie-container">
            <MoviePage MovieName={CityLights.MovieName} ReleaseYear={CityLights.ReleaseYear} Desc={CityLights.Desc} IMDB={CityLights.IMDB} Director={CityLights.Director} Duration={CityLights.Duration} Cast={CityLights.Cast} Genre={CityLights.Genre} Certification={CityLights.Certification} Language={CityLights.Language} Distribution={CityLights.Distribution} mimgUrl={CityLights.mimgUrl} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/chhichhore-movie'><Card1
                    MovieName={Chhichhore.MovieName}
                    Desc={Chhichhore.Desc}
                    IMDB={Chhichhore.IMDB}
                    imgUrl={Chhichhore.imgUrl}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/forrestgump-movie'><Card1
                    MovieName={ForrestGump.MovieName}
                    Desc={ForrestGump.Desc}
                    IMDB={ForrestGump.IMDB}
                    imgUrl={ForrestGump.imgUrl}
                /></Link></div>
                    <div className="card3-container-movie"> <Link className="movie-link" to='/lifeisbeautiful-movie'><Card1
                    MovieName={LifeIsBeautiful.MovieName}
                    Desc={LifeIsBeautiful.Desc}
                    IMDB={LifeIsBeautiful.IMDB}
                    imgUrl={LifeIsBeautiful.imgUrl}
                /></Link></div>
                    <div className="card4-container-movie">  <Link className="movie-link" to='/moderntimes-movie'><Card1
                    MovieName={ModernTimes.MovieName}
                    Desc={ModernTimes.Desc}
                    IMDB={ModernTimes.IMDB}
                    imgUrl={ModernTimes.imgUrl}
                /></Link></div>
                </div>
            </div>
        </div>
    );
}

export default CityLightsPage;