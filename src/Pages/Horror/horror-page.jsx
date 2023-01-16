import React from "react";
import './horror-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

const HorrorPage = () => {
    return(
        <div className="horror-page-container">
            <div className="horror-page-title-text">Horror</div>
            <div className="horror-movie-container">
                <Link className="" to='/alien-movie'><Card1 /></Link>
                <Link className="" to='/psycho-movie'><Card1 /></Link>
                <Link className="" to='/shining-movie'><Card1 /></Link>
            </div>
            <div className="horror-movie-container">
                <Link className="" to='/thing-movie'><Card1 /></Link>
                <Link className="" to='/tumbbad-movie'><Card1 /></Link>
            </div>
        </div>
    );
}

export default HorrorPage;