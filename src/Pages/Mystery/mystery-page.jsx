import React from "react";
import './mystery-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

const MysteryPage = () => {
    return(
        <div className="mystery-page-container">
            <div className="mystery-page-title-text">Mystery</div>
            <div className="mystery-movie-container">
                <Link className="" to='/livesofothers-movie'><Card1 /></Link>
                <Link className="" to='/mirrorgame-movie'><Card1 /></Link>
                <Link className="" to='/rearwindow-movie'><Card1 /></Link>
            </div>
            <div className="mystery-movie-container">
                <Link className="" to='/seven-movie'><Card1 /></Link>
                <Link className="" to='/silenceoflambs-movie'><Card1 /></Link>
            </div>
        </div>
    );
}

export default MysteryPage;