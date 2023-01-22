import React from "react";
import './The-thing-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Alien, Psycho, Shining, Thing, Tumbbad } from "../../../moviedata";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";


const TheThing = () => {
    return(
        <div className="thing-movie-container">
            <MoviePage MovieName={Thing.MovieName} ReleaseYear={Thing.ReleaseYear} Desc={Thing.Desc} IMDB={Thing.IMDB} Director={Thing.Director} Duration={Thing.Duration} Cast={Thing.Cast} Genre={Thing.Genre} Certification={Thing.Certification} Language={Thing.Language} Distribution={Thing.Distribution} />
            <div className="more-movie-movie-container">            
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
                    <div className="card3-container-movie"><Link className="movie-link" to='/alien-movie'><Card1
                    MovieName={Alien.MovieName}
                    Desc={Alien.Desc}
                    IMDB={Alien.IMDB}
                    imgUrl={Alien.imgUrl}
                /></Link></div>
                    <div className="card4-container-movie"><Link className="movie-link" to='/tumbbad-movie'><Card1
                    MovieName={Tumbbad.MovieName}
                    Desc={Tumbbad.Desc}
                    IMDB={Tumbbad.IMDB}
                    imgUrl={Tumbbad.imgUrl}
                /></Link></div>
                </div>
            </div>
        </div>
    );
}

export default TheThing;