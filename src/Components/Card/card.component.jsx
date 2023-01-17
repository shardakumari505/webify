import React from "react";
import './card.component.styles.scss';

const Card = ({MovieName,imgUrl,Desc,IMDB}) => {
    return(
        <div className="main-card-container" style={{backgroundImage:`url(${imgUrl})`}}>
            <div className="main-card-container-before-hover">
                <div className="main-card-container-top">
                    
                </div>

                <div className="main-card-container-bottom">
                    <div className="main-card-container-top-text">{IMDB}</div>
                    <img className="imdbicon" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" />
                </div>
            </div>

            <div className="main-card-container-bottom-on-hover">
                <p className="main-card-container-bottom-on-hover-text">{Desc}</p>
                <div className="main-card-bottom-button">View Trailer</div>
            </div>
        </div>
    );
}

export default Card;