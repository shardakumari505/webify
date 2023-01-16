import React from "react";
import './romantic-comedy-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

const RomanticComedyPage = () => {
    return(
        <div className="romantic-comedy-page-container">
            <div className="romantic-comedy-page-title-text">Romantic Comedy</div>
            <div className="romantic-movie-container">
                <Link className="" to='/chhichhore-movie'><Card1 /></Link>
                <Link className="" to='/citylights-movie'><Card1 /></Link>
                <Link className="" to='/forrestgump-movie'><Card1 /></Link>
            </div>
            <div className="romantic-movie-container">
                <Link className="" to='/lifeisbeautiful-movie'><Card1 /></Link>
                <Link className="" to='/moderntimes-movie'><Card1 /></Link>
            </div>
        </div>
    );
}

export default RomanticComedyPage;