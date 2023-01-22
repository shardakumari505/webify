import React from "react";
import './Dark-knight-movie.styles.scss';
import Card1 from "../../../Components/Card1/card1.components";
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Darknight, LordOfTheRings, Inception, Matrix, StarWars } from "../../../moviedata";

const InceptionPage = () => {
    return (
        <div className="alien-movie-container">
            <MoviePage MovieName={Inception.MovieName} ReleaseYear={Inception.ReleaseYear} Desc={Inception.Desc} IMDB={Inception.IMDB} Director={Inception.Director} Duration={Inception.Duration} Cast={Inception.Cast} Genre={Inception.Genre} Certification={Inception.Certification} Language={Inception.Language} Distribution={Inception.Distribution} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Card1 MovieName={LordOfTheRings.MovieName} imgUrl={LordOfTheRings.imgUrl} Desc={LordOfTheRings.Desc} IMDB={LordOfTheRings.IMDB} /></div>
                    <div className="card2-container-movie"><Card1 MovieName={Darknight.MovieName} imgUrl={Darknight.imgUrl} Desc={Darknight.Desc} IMDB={Darknight.IMDB} /></div>
                    <div className="card3-container-movie"><Card1 MovieName={Matrix.MovieName} imgUrl={Matrix.imgUrl} Desc={Matrix.Desc} IMDB={Matrix.IMDB} /></div>
                    <div className="card4-container-movie"><Card1 MovieName={StarWars.MovieName} imgUrl={StarWars.imgUrl} Desc={StarWars.Desc} IMDB={StarWars.IMDB} /></div>
                </div>
            </div>
        </div>
          
    );
}

export default InceptionPage;