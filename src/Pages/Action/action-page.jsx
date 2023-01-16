import React from "react";
import './action-page.styles.scss';
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";

const ActionPage = () => {
    return(
        <div className="action-page-container">
            <div className="action-page-title-text">Action</div>
            <div className="action-movie-container">
                <Link className="" to='/darkknight-movie'><Card1 /></Link>
                <Link className="" to='/inception-movie'><Card1 /></Link>
                <Link className="" to='/lordofrings-movie'><Card1 /></Link>
            </div>
            <div className="action-movie-container">
                <Link className="" to='/matrix-movie'><Card1 /></Link>
                <Link className="" to='/starwars-movie'><Card1 /></Link>
            </div>
        </div>
    );
}

export default ActionPage;