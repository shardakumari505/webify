import React from "react";
import './Dark-knight-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Darknight,LordOfTheRings,Inception,Matrix,StarWars } from "../../../moviedata";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";


const DarkKnight = () => {
    return(
        <div className="movie-main-page">
                 <MoviePage MovieName={Darknight.MovieName} ReleaseYear={Darknight.ReleaseYear} Desc={Darknight.Desc} IMDB={Darknight.IMDB} Director={Darknight.Director} Duration={Darknight.Duration} Cast={Darknight.Cast} Genre={Darknight.Genre} Certification={Darknight.Certification} Language={Darknight.Language} Distribution={Darknight.Distribution} mimgUrl={Darknight.mimgUrl} />
                 <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container" id="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/lordofrings-movie'><Card1 MovieName={LordOfTheRings.MovieName} imgUrl={LordOfTheRings.imgUrl} Desc={LordOfTheRings.Desc} IMDB={LordOfTheRings.IMDB}/></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/inception-movie'><Card1 MovieName={Inception.MovieName} imgUrl={Inception.imgUrl} Desc={Inception.Desc} IMDB={Inception.IMDB}/></Link></div>
                    <div className="card3-container-movie"><Link className="movie-link" to='/matrix-movie'><Card1 MovieName={Matrix.MovieName} imgUrl={Matrix.imgUrl} Desc={Matrix.Desc} IMDB={Matrix.IMDB}/></Link></div>
                    <div className="card4-container-movie"><Link className="movie-link" to='/starwars-movie'><Card1 MovieName={StarWars.MovieName} imgUrl={StarWars.imgUrl} Desc={StarWars.Desc} IMDB={StarWars.IMDB}/></Link></div>
                </div>
            </div>
        </div>
    );
}

export default DarkKnight;