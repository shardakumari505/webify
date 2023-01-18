import React from "react";
import './share-button.styles.scss';

const ShareButton = () => {
    return (
        <div class="button-container">
            <div class="share">
                <div class="icon first fb"><span class="fa fa-facebook share-span"></span></div>
                <div class="icon twtr"><span class="fa fa-twitter share-span"></span></div>
                <div class="icon gplus"><span class="fa fa-google-plus share-span"></span></div>
                <div class="icon last linkd"><span class="fa fa-linkedin share-span"></span></div>
                <div class="share-label">SHARE</div>
            </div>
        </div>
    );
}

export default ShareButton;