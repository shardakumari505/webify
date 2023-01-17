import React from "react";
import './action-page.styles.scss';
import { Link } from "react-router-dom";
import Card from "../../Components/Card/card.component";
import { Darknight } from "../../moviedata";
import { LordOfTheRings } from "../../moviedata";

const ActionPage = () => {
    return (
        <div className="action-page-container">
            <div className="action-page-title-text">Action</div>
            <div className="action-movie-container">
            <Link className="main-card-container  dark-knight" to='/darkknight-movie'><Card MovieName={Darknight.MovieName} imgUrl={Darknight.imgUrl} Desc={Darknight.Desc} IMDB={Darknight.IMDB} /></Link>
             <Card MovieName={LordOfTheRings.MovieName} imgUrl={LordOfTheRings.imgUrl} Desc={LordOfTheRings.Desc} IMDB={LordOfTheRings.IMDB}/>
             <Card />
             </div>
             <div className="action-movie-container">
             <Card />
             <Card />
             </div>


                {/* <Link className="main-card-container  dark-knight" to='/darkknight-movie'>
                    <div className="main-card-container dark-knight">
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

                <Link className="main-card-container inception" to='/inception-movie'>
                    <div className="main-card-container inception">
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

                <Link className="main-card-container lord-of-rings" to='/lordofrings-movie'>
                    <div className="main-card-container lord-of-rings">
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
            <div className="action-movie-container">
                <Link className="main-card-container matrix" to='/matrix-movie'>
                    <div className="main-card-container matrix">
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

                <Link className="main-card-container star-wars" to='/starwars-movie'>
                    <div className="main-card-container star-wars">
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
        
    );
}

export default ActionPage;