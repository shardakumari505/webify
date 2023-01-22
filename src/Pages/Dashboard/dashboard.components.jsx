import React from "react";
import './dashboard.styles.scss';
import GenresCard from "../../Components/genres-card/genres-card";

const Dashboard = () => {
    return(<div className="dashboard-container">
        <div className="dashboard-container-top">
            <h1 className="dashboard-title-text">
                <span className="dashboard-title-text-span">Ci</span>ne<span className="dashboard-title-text-span">Philes</span>
            </h1>
            <p className="dashboard-description-text">Everyone wants something to watch when they are bored, so Cinephiles is a one stop solution for movie lovers. We have curated the top five movies across five genres.</p>
        </div>
        <h5 className="dashboard-subtitle-text">My Genres</h5>
        <GenresCard />
    </div>
    );
}

export default Dashboard;