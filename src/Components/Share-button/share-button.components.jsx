import React from "react";
import './share-button.styles.scss';

const ShareButton = () => {
    return (
        <div className="button-container">
            <div className="share">
                <div className="icon first fb"><span className="fa fa-facebook share-span"></span></div>
                <div className="icon twtr"><span className="fa fa-twitter share-span"></span></div>
                <div className="icon gplus"><span className="fa fa-google-plus share-span"></span></div>
                <div className="icon last linkd"><span className="fa fa-linkedin share-span"></span></div>
                <div className="share-label">SHARE</div>
            </div>
        </div>
    );
}

export default ShareButton;