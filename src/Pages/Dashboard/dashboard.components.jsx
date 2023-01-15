import React from "react";
import './dashboard.styles.scss';
import GenresCard from "../../Components/genres-card/genres-card";

const Dashboard = () => {
    return(<div className="dashboard-container">
        <div className="dashboard-container-top">
            <h1 className="dashboard-title-text">BingeWatch</h1>
            <p className="dashboard-description-text">Everyone wants something to watch when they are bored, so BingeWatch is a one stop solution for this. We have curated the top five movies across five genres.</p>
        </div>
        <GenresCard />
    </div>
    );
}

export default Dashboard;