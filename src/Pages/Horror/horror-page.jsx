import React from "react";
import './horror-page.styles.scss';
import { Link } from "react-router-dom";
import Card from "../../Components/Card/card.component";
import { Alien, Psycho, Shining, Thing, Tumbbad } from "../../moviedata";
const HorrorPage = () => {
    return (
        <div className="horror-page-container">

<div id='drop'>
  <div id='menuicon'></div>
  <ul id='line'>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

            <div className="horror-page-title-text">Horror</div>
            <div className="horror-movie-container">
                <Link className="movie-link" to='/alien-movie'><Card
                    MovieName={Alien.MovieName}
                    Desc={Alien.Desc}
                    IMDB={Alien.IMDB}
                    imgUrl={Alien.imgUrl}
                /></Link>
                <Link className="movie-link" to='/psycho-movie'><Card
                    MovieName={Psycho.MovieName}
                    Desc={Psycho.Desc}
                    IMDB={Psycho.IMDB}
                    imgUrl={Psycho.imgUrl}
                /></Link>
                <Link className="movie-link" to='/shining-movie'><Card
                    MovieName={Shining.MovieName}
                    Desc={Shining.Desc}
                    IMDB={Shining.IMDB}
                    imgUrl={Shining.imgUrl}
                /></Link>
                <Link className="movie-link" to='/thing-movie'><Card
                    MovieName={Thing.MovieName}
                    Desc={Thing.Desc}
                    IMDB={Thing.IMDB}
                    imgUrl={Thing.imgUrl}
                /></Link>
                <Link className="movie-link" to='/tumbbad-movie'><Card
                    MovieName={Tumbbad.MovieName}
                    Desc={Tumbbad.Desc}
                    IMDB={Tumbbad.IMDB}
                    imgUrl={Tumbbad.imgUrl}
                /></Link>
            </div>
        </div>
    );
}

export default HorrorPage;