import React from "react";
import './anime-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

const AnimePage = () => {
    return(
        <div className="anime-page-container">
            <div className="anime-page-title-text">Anime</div>
            <div className="anime-movie-container">
                <Link className="" to='/graveoffireflies-movie'><Card1 /></Link>
                <Link className="" to='/lionking-movie'><Card1 /></Link>
                <Link className="" to='/spiderman-movie'><Card1 /></Link>
            </div>
            <div className="anime-movie-container">
                <Link className="" to='/spiritedaway-movie'><Card1 /></Link>
                <Link className="" to='/yourname-movie'><Card1 /></Link>
            </div>
        </div>
    );
}

export default AnimePage;