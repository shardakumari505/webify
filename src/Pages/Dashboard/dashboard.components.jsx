import React from "react";
import './dashboard.styles.scss';
import GenresCard from "../../Components/genres-card/genres-card";
import Dropmenu from "../../Components/Dropmenu-button/Dropmenu.components";

const Dashboard = () => {
    return (<div className="dashboard-container">
        <div className="dashboard-container-top">



            <div class="section-1 mh">
                <div class="box vivify fadeIn"><img src="https://anshulgupta.in/ui/landing-page/fxi/daniel-monteiro-uGVqeh27EHE-unsplash.jpg" alt="" /></div>
                <div class="box vivify fadeIn duration-200 delay-100">
                    <img src="https://anshulgupta.in/ui/landing-page/fxi/alex-iby-470eBDOc8bk-unsplash.jpg" alt="" />
                </div>
                <div class="box vivify fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-carter-tiWcNvpQF4E-unsplash.jpg" alt="" /></div>
                <div class="box vivify fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/fezbot2000-lHtlEv850IM-unsplash.jpg" alt="" /></div>
                <div class="box vivify fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/brantley-neal-uph_qeI7tVc-unsplash.jpg" alt="" /></div>
                
            </div>
            <div class="section-2 mh">
                <div class="box vivify fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/tyler-nix-ssmQJ-q4VqE-unsplash.jpg" alt="" /></div>
                <div class="box vivify fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/connor-botts-YxKBT84-nm0-unsplash.jpg" alt="" /></div>
                <div class="box vivify fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-syed-ZdOSy9_DWWg-unsplash.jpg" alt="" /></div>
                <div class="company-name">
                    <h1 class="vivify driveInLeft duration-1000 section-2-h1">CinePhiles</h1>
                    <h2 class="vivify swoopInTop duration-400 section-2-h2"> Is a one stop solution for movie lovers.<br /> We have curated the top five movies across five genres.</h2>
                </div>
            </div>
            
            <div class="slide-text">
                <p>
                    <span>
                        <svg class="vivify popInLeft duration-800" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512" }} xmlSpace="preserve">
                            <g>
                                <g>
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                                </g>
                            </g>
                        </svg>
                    </span></p>

            </div>



            {/* <div className="dash-image-overlay"></div>
                <h1 className="dashboard-title-text">
                    <span className="dashboard-title-text-span">Ci</span>ne<span className="dashboard-title-text-span">Philes</span>
                </h1>
                <p className="dashboard-description-text">Everyone wants something to watch when they are bored, so Cinephiles is a one stop solution for movie lovers. We have curated the top five movies across five genres.</p> */}
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