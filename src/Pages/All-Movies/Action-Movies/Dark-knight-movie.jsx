import React from "react";
import './Dark-knight-movie.styles.scss';
import Card1 from "../../../Components/Card1/card1.components";

const DarkKnight = () => {
    return(
        <div className="movie-movie-container">
            <div className="image-container">
                <div className="movie-title-and-imdb-rating">
                    <span className="movie-title-on-main-movie-page">The Dark Knight</span>
                    <span class="imdbRatingPlugin" data-user="ur161205415" data-title="tt0468569" data-style="p1">
                        <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                        <h6>8.7</h6>
                    </span>
                </div>
                <span className="movie-details-on-main-movie-page">
                    <span className="meta-data">2008 ‧ U/A ‧ Action ‧ 2h 32m</span>
                </span>
            </div>

            <div className="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                </div>
            </div>
          

        </div>
    );
}

export default DarkKnight;