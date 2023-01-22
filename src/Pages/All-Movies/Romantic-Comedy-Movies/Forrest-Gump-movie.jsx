import React from "react";
import './Forrest-gump-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { Chhichhore, CityLights, ForrestGump, LifeIsBeautiful, ModernTimes } from "../../../moviedata"


const ForrestGumpPage = () => {
    return(
        <div className="forrest-gump-movie-container">
            <MoviePage MovieName={ForrestGump.MovieName} ReleaseYear={ForrestGump.ReleaseYear} Desc={ForrestGump.Desc} IMDB={ForrestGump.IMDB} Director={ForrestGump.Director} Duration={ForrestGump.Duration} Cast={ForrestGump.Cast} Genre={ForrestGump.Genre} Certification={ForrestGump.Certification} Language={ForrestGump.Language} Distribution={ForrestGump.Distribution} mimgUrl={ForrestGump.mimgUrl} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/citylights-movie'><Card1
                    MovieName={CityLights.MovieName}
                    Desc={CityLights.Desc}
                    IMDB={CityLights.IMDB}
                    imgUrl={CityLights.imgUrl}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/chhichhore-movie'><Card1
                    MovieName={Chhichhore.MovieName}
                    Desc={Chhichhore.Desc}
                    IMDB={Chhichhore.IMDB}
                    imgUrl={Chhichhore.imgUrl}
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

export default ForrestGumpPage;