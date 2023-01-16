import React from "react";
import './anime-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";

const AnimePage = () => {
    return(
        <div className="anime-page-container">
            <div className="anime-page-title-text">Anime</div>
            <div className="anime-movie-container">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div className="anime-movie-container">
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default AnimePage;