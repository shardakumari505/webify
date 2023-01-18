import React from "react";
import './Dark-knight-movie.styles.scss';
import Card1 from "../../../Components/Card1/card1.components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import ShareButton from "../../../Components/Share-button/share-button.components";

const DarkKnight = () => {
    return(
        <div className="movie-movie-container">
            <div className="image-container">
                <div className="movie-all-texts">
                    <div className="movie-title-and-imdb-rating">
                        <span className="movie-title-on-main-movie-page">The Dark Knight</span>
                        <span class="imdbRatingPlugin" data-user="ur161205415" data-title="tt0468569" data-style="p1">
                            <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            <h6>8.7</h6>
                        </span>
                    </div>
                    <span className="movie-details-on-main-movie-page">
                        <span className="meta-data">2008 ‧ U/A ‧ Action ‧ English ‧ 2h 32m</span>
                    </span>
                    <span className="movie-description-on-main-movie-page">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</span>
                    <span className="more-about-movie-on-main-movie-page">
                        <span className="more-meta-data">
                            <span className="left-column">Directors</span>
                            <span className="right-column">Christopher Nolan</span>
                        </span>
                        <span className="more-meta-data">
                            <span className="left-column">Starring</span>
                            <span className="right-column">Christian Bale <br /> Michael Caine <br /> Heath Ledger <br /> Gary Oldman <br /> Aaron Eckhart <br /> Maggie Gyllenhaal <br /> Morgan Freeman</span>
                        </span>
                        <span className="more-meta-data">
                            <span className="left-column">Distributed By</span>
                            <span className="right-column">Warner Bros. Pictures</span>
                        </span>
                    </span>
                    <div className="movie-play-button-container">
                        <div className="movie-play-left-container">
                            <div className="movie-play-button">
                                <FontAwesomeIcon className="play-icon" icon={faPlay} />
                                <div className="play-button">Play</div>
                            </div>
                            <div className="movie-share-button">
                                {/* <FontAwesomeIcon className="share-icon" icon={faShareNodes} /> */}
                                <ShareButton />
                            </div>
                        </div>
                        <div className="movie-trailer-button">
                            <FontAwesomeIcon className="play-icon" icon={faPlay} />
                            <div className="trailer-button">Trailer</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <Card1/>
                    {/* <Card1/>
                    <Card1/>
                    <Card1/> */}
                </div>
            </div>
          

        </div>
    );
}

export default DarkKnight;