import React from "react";
import './anime-page.styles.scss';
import Card from "../../Components/Card/card.component";
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

import { Grave, LionKing, SpiderMan, Spritedaway, Yourname } from "../../moviedata";


const AnimePage = () => {
    return (
        <div className="anime-page-container">
            <div className="anime-page-title-text">Anime</div>
            <div className="anime-movie-container">
                <Link className="movie-link" to='/graveoffireflies-movie'><Card
                    MovieName={Grave.MovieName}
                    Desc={Grave.Desc}
                    imgUrl={Grave.imgUrl}
                    IMDB={Grave.IMDB}
                /></Link>

                <Link className="movie-link" to='/lionking-movie'><Card
                    MovieName={LionKing.MovieName}
                    Desc={LionKing.Desc}
                    imgUrl={LionKing.imgUrl}
                    IMDB={LionKing.IMDB}
                /></Link>

                <Link className="movie-link" to='/spiderman-movie'><Card
                    MovieName={SpiderMan.MovieName}
                    Desc={SpiderMan.Desc}
                    imgUrl={SpiderMan.imgUrl}
                    IMDB={SpiderMan.IMDB}
                /></Link>

                <Link className="movie-link" to='/spiritedaway-movie'><Card
                    MovieName={Spritedaway.MovieName}
                    Desc={Spritedaway.Desc}
                    imgUrl={Spritedaway.imgUrl}
                    IMDB={Spritedaway.IMDB}
                /></Link>
                <Link className="movie-link" to='/yourname-movie'><Card
                    MovieName={Yourname.MovieName}
                    Desc={Yourname.Desc}
                    imgUrl={Yourname.imgUrl}
                    IMDB={Yourname.IMDB}
                /></Link>


                {/*                 
                <Link className="main-card-container  grave-of-fireflies" to='/graveoffireflies-movie'>
                    <div className="main-card-container grave-of-fireflies">
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


                <Link className="main-card-container  lion-king" to='/lionking-movie'>
                    <div className="main-card-container lion-king">
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


                <Link className="main-card-container  spider-man" to='/spiderman-movie'>
                    <div className="main-card-container spider-man">
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
            <div className="anime-movie-container">
                <Link className="main-card-container  spirited-away" to='/spiritedaway-movie'>
                    <div className="main-card-container spirited-away">
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


                <Link className="main-card-container  your-name" to='/yourname-movie'>
                    <div className="main-card-container your-name">
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

export default AnimePage;