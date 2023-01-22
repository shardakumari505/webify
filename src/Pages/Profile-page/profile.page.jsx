import React from "react";
import './profile.page.styles.scss';
import Sharda from './sharda.jpg';
import Sameer from './sameer.png'

const ProfilePage = () => {
    return (
        <div className="profile-page-container">

            <div className="sticky-title">
                <div className="rectangle-box">About Us</div>
                <div className="left-arrow"></div>
            </div>

            <div className="profile-card profile-two">
                <div class="card-image profile-img--two">
                    <img className="sharda-pic" src={Sharda} alt="profile two" />
                </div>

                <div class="details sharda">
                    <h2>Sharda Kumari</h2>

                    <span class="college">National Institute of Technology , Mizoram</span>

                    <span className="current-job">Upcoming SDE Intern at Microsoft</span>
                    <span class="profile-social-links">
                        <a target="_blank" href="https://www.linkedin.com/in/ksharda/" rel="noreferrer">
                            <i class="fa fa-linkedin my-icon linkedin"></i>
                        </a>
                        <a target="_blank" href="https://github.com/shardakumari505" rel="noreferrer">
                            <i class="fa fa-github my-icon"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/sharda2282/" rel="noreferrer">

                            <i class="fa fa-instagram my-icon insta"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/sharda9_singh" rel="noreferrer">
                            <i class="fa fa-twitter my-icon"></i>
                        </a>
                    </span>
                    <span className="interest">Experiences</span>
                    <ul className="experience">
                        <li>Research Fellow at IIT Delhi</li>
                        <li>Microsoft Engage Mentee</li>
                        <li>Web Developer at Vaguss</li>
                        <li>D2C Lead Igniter</li>
                        <li>Marketing Intern at Shaastra, IIT Madras</li>
                        <li>Analytics Intern at HH Education</li>
                    </ul>
                    <span className="interest">Achievements</span>
                    <ul className="experience">
                        <li>Amazon ML Summer School</li>
                        <li>First Runner Up in WebdevnElan , IIT Hyderabad</li>
                        <li>Cleared 3rd round in NVCTI , IIT Dhanbad</li>
                        <li>Second Runner Up in Mixed Medium Art, IIT Bombay</li>
                    </ul>
                </div>
            </div>

            <div className="profile-card-two">
                <div class="pr-card">
                    <div class="imgBx imgSameer">
                        <img src={Sameer} alt="" />
                    </div>

                    <div class="contentBx">

                        <h2>Sameer Kumar Shrivastava</h2>

                        <span class="college">Sitamarhi Institute of Technology , Sitamarhi</span>

                        <span className="current-job">SDE Intern at ELDAAS</span>
                        <span class="profile-social-links">
                            <a target="_blank" href="https://www.linkedin.com/in/sameer-kumar-shrivastava/" rel="noreferrer">
                                <i class="fa fa-linkedin my-icon linkedin"></i>
                            </a>
                            <a target="_blank" href="https://github.com/sameer-kumar-shrivastava" rel="noreferrer">
                                <i class="fa fa-github my-icon"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/sameer__shrivastava/" rel="noreferrer">

                                <i class="fa fa-instagram my-icon insta"></i>
                            </a>
                            <a target="_blank" href="https://twitter.com/i_sameer21" rel="noreferrer">
                                <i class="fa fa-twitter my-icon"></i>
                            </a>
                        </span>
                        <span className="interest">Experiences</span>
                        <ul className="experience">
                            <li>Ninja Entrepreneur at Coding Ninjas</li>
                            <li>Web Developer at Vaguss</li>
                            <li>Frontend Developer at Executive Strokes</li>
                            <li>Club Incharge & Council Member at Coding Club, SIT</li>
                            <li>Content Developer at Doubtnut</li>
                        </ul>
                        <span className="interest">Achievements</span>
                        <ul className="experience">
                            <li>Winner of Technical Paper presentation at National Technical Symposium</li>
                            <li>First Runner Up in webathon at WebdevnElan , IIT Hyderabad</li>
                            <li>All India Topper of NPTEL Course, IIT Roorkee</li>
                            <li>Indigo Squad Member, IIT Bombay</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfilePage;