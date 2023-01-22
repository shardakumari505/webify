import React from "react";
import './Tumbbad-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Alien, Psycho, Shining, Thing, Tumbbad } from "../../../moviedata";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";


const TumbbadPage = () => {
    return(
        <div className="tumbbad-movie-container">
            <MoviePage MovieName={Tumbbad.MovieName} ReleaseYear={Tumbbad.ReleaseYear} Desc={Tumbbad.Desc} IMDB={Tumbbad.IMDB} Director={Tumbbad.Director} Duration={Tumbbad.Duration} Cast={Tumbbad.Cast} Genre={Tumbbad.Genre} Certification={Tumbbad.Certification} Language={Tumbbad.Language} Distribution={Tumbbad.Distribution} mimgUrl={Tumbbad.mimgUrl} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"> <Link className="movie-link" to='/psycho-movie'><Card1
                    MovieName={Psycho.MovieName}
                    Desc={Psycho.Desc}
                    IMDB={Psycho.IMDB}
                    imgUrl={Psycho.imgUrl}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/shining-movie'><Card1
                    MovieName={Shining.MovieName}
                    Desc={Shining.Desc}
                    IMDB={Shining.IMDB}
                    imgUrl={Shining.imgUrl}
                /></Link></div>
                    <div className="card3-container-movie"><Link className="movie-link" to='/thing-movie'><Card1
                    MovieName={Thing.MovieName}
                    Desc={Thing.Desc}
                    IMDB={Thing.IMDB}
                    imgUrl={Thing.imgUrl}
                /></Link></div>
                    <div className="card4-container-movie"><Link className="movie-link" to='/alien-movie'><Card1
                    MovieName={Alien.MovieName}
                    Desc={Alien.Desc}
                    IMDB={Alien.IMDB}
                    imgUrl={Alien.imgUrl}
                /></Link></div>
                </div>
            </div>
        </div>
    );
}

export default TumbbadPage;