import React from "react";
import './romantic-comedy-page.styles.scss';
import Card from "../../Components/Card/card.component";
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { Chhichhore, CityLights, ForrestGump, LifeIsBeautiful, ModernTimes } from "../../moviedata";
const RomanticComedyPage = () => {
    return (
        <div className="romantic-comedy-page-container">
            <div className="romantic-comedy-page-title-text">Romantic Comedy</div>
            <div className="romantic-movie-container">
                <Link className="movie-link" to='/chhichhore-movie'><Card
                    MovieName={Chhichhore.MovieName}
                    Desc={Chhichhore.Desc}
                    IMDB={Chhichhore.IMDB}
                    imgUrl={Chhichhore.imgUrl}
                /></Link>
                <Link className="movie-link" to='/citylights-movie'><Card
                    MovieName={CityLights.MovieName}
                    Desc={CityLights.Desc}
                    IMDB={CityLights.IMDB}
                    imgUrl={CityLights.imgUrl}
                /></Link>
                <Link className="movie-link" to='/forrestgump-movie'><Card
                    MovieName={ForrestGump.MovieName}
                    Desc={ForrestGump.Desc}
                    IMDB={ForrestGump.IMDB}
                    imgUrl={ForrestGump.imgUrl}
                /></Link>
                <Link className="movie-link" to='/lifeisbeautiful-movie'><Card
                    MovieName={LifeIsBeautiful.MovieName}
                    Desc={LifeIsBeautiful.Desc}
                    IMDB={LifeIsBeautiful.IMDB}
                    imgUrl={LifeIsBeautiful.imgUrl}
                /></Link>
                <Link className="movie-link" to='/moderntimes-movie'><Card
                    MovieName={ModernTimes.MovieName}
                    Desc={ModernTimes.Desc}
                    IMDB={ModernTimes.IMDB}
                    imgUrl={ModernTimes.imgUrl}
                /></Link>



                {/* <Link className="main-card-container  chhichhore" to='/chhichhore-movie'>
                    <div className="main-card-container chhichhore">
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

                <Link className="main-card-container  citylights" to='/citylights-movie'>
                    <div className="main-card-container citylights">
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

                <Link className="main-card-container  forrestgump" to='/forrestgump-movie'>
                    <div className="main-card-container forrestgump">
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
            <div className="romantic-movie-container">
                <Link className="main-card-container  lifeisbeautiful" to='/lifeisbeautiful-movie'>
                    <div className="main-card-container lifeisbeautiful">
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

                <Link className="main-card-container  moderntimes" to='/moderntimes-movie'>
                    <div className="main-card-container moderntimes">
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

export default RomanticComedyPage;