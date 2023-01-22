import React from "react";
import './Alien-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Alien, Psycho, Shining, Thing, Tumbbad } from "../../../moviedata";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";


const AlienPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Alien.MovieName} ReleaseYear={Alien.ReleaseYear} Desc={Alien.Desc} IMDB={Alien.IMDB} Director={Alien.Director} Duration={Alien.Duration} Cast={Alien.Cast} Genre={Alien.Genre} Certification={Alien.Certification} Language={Alien.Language} Distribution={Alien.Distribution} />
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

export default AlienPage;