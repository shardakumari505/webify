import React from "react";
import './movie-page.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Card1 from "../Card1/card1.components";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import ShareButton from "../Share-button/share-button.components";
import Dropmenu from "../Dropmenu-button/Dropmenu.components";

// style={{backgroundImage:`url(${imgUrl})`}}

const MoviePage = ({ MovieName, IMDB, ReleaseYear, Desc, Director, Duration, Cast, imgUrl, Genre, Certification, Language, Distribution }) => {
    return (
        <div className="movie-movie-container">
            <div className="image-container" >
                <div className="movie-all-texts">
                    <div className="movie-title-and-imdb-rating">
                        <span className="movie-title-on-main-movie-page">{MovieName}</span>
                        <span className="imdbRatingPlugin" data-user="ur161205415" data-title="tt0468569" data-style="p1">
                            <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                            <h6>{IMDB}</h6>
                        </span>
                    </div>
                    <span className="movie-details-on-main-movie-page">
                        <span className="meta-data">{ReleaseYear} ‧ {Certification} ‧ {Genre} ‧ {Language} ‧ {Duration}</span>
                    </span>
                    <span className="movie-description-on-main-movie-page">{Desc}</span>
                    <span className="more-about-movie-on-main-movie-page">
                        <span className="more-meta-data-movie-page">
                            <span className="left-column-movie-page">Directors</span>
                            <span className="right-column-movie-page">{Director}</span>
                        </span>
                        <span className="more-meta-data-movie-page">
                            <span className="left-column-movie-page">Starring</span>
                            <span className="right-column-movie-page">{Cast}</span>
                        </span>
                        <span className="more-meta-data-movie-page">
                            <span className="left-column-movie-page">Distributed By</span>
                            <span className="right-column-movie-page">{Distribution}</span>
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
            <Dropmenu nextblock="more-movie-movie-container" />
        </div>
    );
}

export default MoviePage;