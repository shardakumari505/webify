import React from "react";
import './dashboard.styles.scss';
import GenresCard from "../../Components/genres-card/genres-card";
import Dropmenu from "../../Components/Dropmenu-button/Dropmenu.components";

const Dashboard = () => {
    return (<div className="dashboard-container">            
            <div className="dashboard-container-top">
            <div className="dash-image-overlay"></div>
                <h1 className="dashboard-title-text">
                    <span className="dashboard-title-text-span">Ci</span>ne<span className="dashboard-title-text-span">Philes</span>
                </h1>
                <p className="dashboard-description-text">Everyone wants something to watch when they are bored, so Cinephiles is a one stop solution for movie lovers. We have curated the top five movies across five genres.</p>
            </div>
        {/* <div className="dashboard-container-middle">
            <a className="dropdown" href="#genreCrd"><span className="fa fa-chevron-down chevron"></span></a>
        </div> */}

        <div className="drop"><Dropmenu nextblock="genreCrd" /></div>
        <div className="dashboard-container-bottom">
            <h5 id="dashboard-subtitle-text" className="dashboard-subtitle-text">Genres</h5>
            <div id="genreCrd" className="genreCrd"><GenresCard /></div>
        </div>
    </div>
    );
}

export default Dashboard;