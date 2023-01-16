import React from "react";
import './romantic-comedy-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";

const RomanticComedyPage = () => {
    return(
        <div className="romantic-comedy-page-container">
            <div className="romantic-comedy-page-title-text">Romantic Comedy</div>
            <div className="romantic-movie-container">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div className="romantic-movie-container">
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default RomanticComedyPage;