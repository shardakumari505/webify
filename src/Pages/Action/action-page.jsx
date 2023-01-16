import React from "react";
import './action-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";

const ActionPage = () => {
    return(
        <div className="action-page-container">
            <div className="action-page-title-text">Action</div>
            <div className="action-movie-container">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
            <div className="action-movie-container">
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default ActionPage;