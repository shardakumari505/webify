import React from "react";
import './profile.page.styles.scss';
import Sharda from './sharda.jpg';
import Sameer from './sameer.png'

const ProfilePage = () => {
    return (
        <div className="profile-page-container">

            <div className="profile-card profile-two">
                <div class="card-image profile-img--two">
                    <img className="sharda-pic" src={Sharda} alt="profile two" />
                </div>

                <div class="details jane">
                    <h2>Sharda Kumari
                        <br />
                        <span class="job-title">National Institute of Technology , Mizoram</span>
                    </h2>
                </div>
            </div>

            <div className="profile-card-two">
                    <div class="pr-card">
                        <div class="imgBx">
                            <img src={Sameer} alt="" />
                        </div>

                        <div class="contentBx">

                            <h2>Sameer Kumar Shrivastava</h2>

                            <span class="job-title">Sitamarhi Institute of Technology , Sitamarhi</span>
                        </div>

                    </div>
            </div>
        </div>
    );
}

export default ProfilePage;