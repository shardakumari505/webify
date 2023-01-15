import React from "react";
import './genres-card.styles.scss';

const GenresCard = () => {
    return(
        <div className="genres-card-container">
            <div className="genres-card horror">
                <h5 className="">Horror</h5>
            </div>

            <div className="genres-card romantic-comedy">
                <h5 className="">Romantic Comedy</h5>
            </div>

            <div className="genres-card mystery">
                <h5 className="">Mystery</h5>
            </div>

            <div className="genres-card anime">
                <h5 className="">Anime</h5>
            </div>

            <div className="genres-card action">
                <h5 className="">Action</h5>
            </div>
        </div>
    );
}

export default GenresCard;