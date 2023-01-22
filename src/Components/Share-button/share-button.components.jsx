import React from "react";
import './share-button.styles.scss';

const ShareButton = () => {
    return (
        <div className="button-container">
            <div className="share">
                <a href="https://facebook.com"><div className="icon first fb"><span className="fa fa-facebook share-span"></span></div></a>
                <a href="https://twitter.com"><div className="icon twtr"><span className="fa fa-twitter share-span"></span></div></a>
                <a href="https://instagram.com"><div className="icon gplus"><span className="fa fa-instagram share-span"></span></div></a>
                <a href="https://linkedin.com"><div className="icon last linkd"><span className="fa fa-linkedin share-span"></span></div></a>
                <div className="share-label">SHARE</div>
            </div>
        </div>
    );
}

export default ShareButton;