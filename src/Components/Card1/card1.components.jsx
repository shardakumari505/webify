import React from "react";
import './card1.styles.scss';
import Imdb from './imdb.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card1 = (title) => {
 return(<>
    <div className="card-container">
      {/* <div className="card-top-mentions">
         <FontAwesomeIcon className="rating-star-icon" icon={faStar} />
         <span class="imdbRatingPlugin" data-user="ur161205415" data-title="tt0468569" data-style="p1"><a href="https://www.imdb.com/title/tt0468569/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt="The Dark Knight (2008) on IMDb" /></a></span>
      </div> */}
    </div>
 </>)
}

export default Card1;