import React from "react";
import './horror-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
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


                {/* <Link className="main-card-container  alien" to='/alien-movie'>
                    <div className="main-card-container alien">
                        <div className="main-card-container-before-hover">
                            <div className="main-card-container-top">

                            </div>

                            <div className="main-card-container-bottom">
                                <div className="main-card-container-top-text">8.7</div>
                                <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            </div>
                        </div>

                        <div className="main-card-container-bottom-on-hover">

                        </div>
                    </div>
                </Link>

                <Link className="main-card-container  psycho" to='/psycho-movie'>
                    <div className="main-card-container psycho">
                        <div className="main-card-container-before-hover">
                            <div className="main-card-container-top">

                            </div>

                            <div className="main-card-container-bottom">
                                <div className="main-card-container-top-text">8.7</div>
                                <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            </div>
                        </div>

                        <div className="main-card-container-bottom-on-hover">

                        </div>
                    </div>
                </Link>

                <Link className="main-card-container  shining" to='/shining-movie'>
                    <div className="main-card-container shining">
                        <div className="main-card-container-before-hover">
                            <div className="main-card-container-top">

                            </div>

                            <div className="main-card-container-bottom">
                                <div className="main-card-container-top-text">8.7</div>
                                <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            </div>
                        </div>

                        <div className="main-card-container-bottom-on-hover">

                        </div>
                    </div>
                </Link>
            </div>
            <div className="horror-movie-container">
                <Link className="main-card-container  thing" to='/thing-movie'>
                    <div className="main-card-container thing">
                        <div className="main-card-container-before-hover">
                            <div className="main-card-container-top">

                            </div>

                            <div className="main-card-container-bottom">
                                <div className="main-card-container-top-text">8.7</div>
                                <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            </div>
                        </div>

                        <div className="main-card-container-bottom-on-hover">

                        </div>
                    </div>
                </Link>

                <Link className="main-card-container  tumbbad" to='/tumbbad-movie'>
                    <div className="main-card-container tumbbad">
                        <div className="main-card-container-before-hover">
                            <div className="main-card-container-top">

                            </div>

                            <div className="main-card-container-bottom">
                                <div className="main-card-container-top-text">8.7</div>
                                <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            </div>
                        </div>

                        <div className="main-card-container-bottom-on-hover">

                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
}

export default HorrorPage;