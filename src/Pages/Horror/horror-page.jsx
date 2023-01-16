import React from "react";
import './horror-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";

const HorrorPage = () => {
    return(
        <div className="horror-page-container">
            <div className="horror-page-title-text">Horror</div>
            <div className="horror-movie-container">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div className="horror-movie-container">
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default HorrorPage;