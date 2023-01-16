import React from "react";
import './genres-card.styles.scss';
import { Link } from "react-router-dom";

const GenresCard = () => {
    return(
        <div className="genres-card-container">
            <Link className="genres-card horror" to="/horrorpage" >
                <div className="genres-card horror" id='horror-page'>
                    <h5 className="">Horror</h5>
                </div>
            </Link>

            <Link className="genres-card romantic-comedy" to="/romanticcomedypage" >
                <div className="genres-card romantic-comedy" id='romantic-comedy-page'>
                    <h5 className="">Romantic Comedy</h5>
                </div>
            </Link>

            <Link className="genres-card mystery" to="/mysterypage" >
                <div className="genres-card mystery" id='mystery-page'>
                    <h5 className="">Mystery</h5>
                </div>
            </Link>

            <Link className="genres-card anime" to="/animepage" >
                <div className="genres-card anime" id='anime-page'>
                    <h5 className="">Anime</h5>
                </div>
            </Link>

            <Link className="genres-card action" to="/actionpage" >
                <div className="genres-card action" id='action-page'>
                    <h5 className="">Action</h5>
                </div>
            </Link>
        </div>
    );
}

export default GenresCard;