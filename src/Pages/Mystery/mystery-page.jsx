import React from "react";
import './mystery-page.styles.scss';
import Card from "../../Components/Card/card.component";
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { LivesofOthers, MirrorGame, RearWindow, Seven, SilenceofLambs } from "../../moviedata";

const MysteryPage = () => {
    return (
        <div className="mystery-page-container">
            <div className="mystery-page-title-text">Mystery</div>
            <div className="mystery-movie-container">
                <Link className="movie-link" to='/livesofothers-movie'><Card
                    MovieName={LivesofOthers.MovieName}
                    Desc={LivesofOthers.Desc}
                    IMDB={LivesofOthers.IMDB}
                    imgUrl={LivesofOthers.imgUrl}
                /></Link>
                <Link className="movie-link" to='/mirrorgame-movie'><Card
                    MovieName={MirrorGame.MovieName}
                    Desc={MirrorGame.Desc}
                    IMDB={MirrorGame.IMDB}
                    imgUrl={MirrorGame.imgUrl}
                /></Link>
                <Link className="movie-link" to='/rearwindow-movie'><Card
                    MovieName={RearWindow.MovieName}
                    Desc={RearWindow.Desc}
                    IMDB={RearWindow.IMDB}
                    imgUrl={RearWindow.imgUrl}
                /></Link>
                <Link className="movie-link" to='/seven-movie'><Card
                    MovieName={Seven.MovieName}
                    Desc={Seven.Desc}
                    IMDB={Seven.IMDB}
                    imgUrl={Seven.imgUrl}
                /></Link>
                <Link className="movie-link" to='/silenceoflambs-movie'><Card
                    MovieName={SilenceofLambs.MovieName}
                    Desc={SilenceofLambs.Desc}
                    IMDB={SilenceofLambs.IMDB}
                    imgUrl={SilenceofLambs.imgUrl}
                /></Link>

                {/* <Link className="main-card-container  lives-of-others" to='/livesofothers-movie'>
                    <div className="main-card-container lives-of-others">
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

                <Link className="main-card-container  mirror-game" to='/mirrorgame-movie'>
                    <div className="main-card-container mirror-game">
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

                <Link className="main-card-container  rear-window" to='/rearwindow-movie'>
                    <div className="main-card-container rear-window">
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
            <div className="mystery-movie-container">
                <Link className="main-card-container  seven" to='/seven-movie'>
                    <div className="main-card-container seven">
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

                <Link className="main-card-container  silence-of-lambs" to='/silenceoflambs-movie'>
                    <div className="main-card-container silence-of-lambs">
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

export default MysteryPage;