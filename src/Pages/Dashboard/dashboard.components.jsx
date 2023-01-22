import React from "react";
import './dashboard.styles.scss';
import GenresCard from "../../Components/genres-card/genres-card";
import Dropmenu from "../../Components/Dropmenu-button/Dropmenu.components";

const Dashboard = () => {
    return (<div className="dashboard-container">
        <div className="dashboard-container-top-top">
            <div class="ag-format-container">
                <div class="ag-fire-man_box">
                    <div class="ag-fire-man_fire-bg">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/man-with-fire/images/fire-bg.png" class="ag-fire-man_box-img" alt="" />
                    </div>
                    <div class="ag-fire-man_fire ag-fire-man_fire-1 anim">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/man-with-fire/images/f1.jpg" class="ag-fire-man_fire-img" alt="" />
                    </div>
                    <div class="ag-fire-man_fire ag-fire-man_fire-2 anim">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/man-with-fire/images/f2.jpg" class="ag-fire-man_fire-img" alt="" />
                    </div>
                    <div class="ag-fire-man_fire ag-fire-man_fire-3 anim">
                        <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/man-with-fire/images/f3.jpg" class="ag-fire-man_fire-img" alt="" />
                    </div>
                    <img src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/man-with-fire/images/man.png" alt="" />
                </div>
            </div>
            <div className="dashboard-container-top">
                <h1 className="dashboard-title-text">
                    <span className="dashboard-title-text-span">Ci</span>ne<span className="dashboard-title-text-span">Philes</span>
                </h1>
                <p className="dashboard-description-text">Everyone wants something to watch when they are bored, so Cinephiles is a one stop solution for movie lovers. We have curated the top five movies across five genres.</p>
            </div>
        </div>
        {/* <div className="dashboard-container-middle">
            <a className="dropdown" href="#genreCrd"><span className="fa fa-chevron-down chevron"></span></a>
        </div> */}

        <Dropmenu nextblock="genreCrd" />
        <div className="dashboard-container-bottom">
            <h5 id="dashboard-subtitle-text" className="dashboard-subtitle-text">Genres</h5>
            <div id="genreCrd" className="genreCrd"><GenresCard /></div>
        </div>
    </div>
    );
}

export default Dashboard;