import React from "react";
import './Psycho-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Alien, Psycho, Shining, Thing, Tumbbad } from "../../../moviedata";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";


const PsychoPage = () => {
    return(
        <div className="psycho-movie-container">
            <MoviePage MovieName={Psycho.MovieName} ReleaseYear={Psycho.ReleaseYear} Desc={Psycho.Desc} IMDB={Psycho.IMDB} Director={Psycho.Director} Duration={Psycho.Duration} Cast={Psycho.Cast} Genre={Psycho.Genre} Certification={Psycho.Certification} Language={Psycho.Language} Distribution={Psycho.Distribution} />
            <div className="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"> <Link className="movie-link" to='/alien-movie'><Card1
                    MovieName={Alien.MovieName}
                    Desc={Alien.Desc}
                    IMDB={Alien.IMDB}
                    imgUrl={Alien.imgUrl}
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

export default PsychoPage;