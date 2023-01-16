import React from "react";
import './mystery-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";

const MysteryPage = () => {
    return(
        <div className="mystery-page-container">
            <div className="mystery-page-title-text">Mystery</div>
            <div className="mystery-movie-container">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div className="mystery-movie-container">
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default MysteryPage;