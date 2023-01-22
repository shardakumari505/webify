import React from "react";
import './card1.styles.scss';
import Card from "../Card/card.component";


const Card1 = ({MovieName,Desc,imgUrl,IMDB}) => {
  return (<>
    <div className="container">
      <div className="card1">
        <Card MovieName={MovieName} Desc={Desc} imgUrl={imgUrl} IMDB={IMDB} />
      </div>

      {/* <div className="card2">
      <Card MovieName={Darknight.MovieName} Desc={Darknight.Desc} />
      </div>

      <div className="card3">
      <Card MovieName={Darknight.MovieName} Desc={Darknight.Desc} />
      </div>

      <div className="card4">
      <Card MovieName={Darknight.MovieName} Desc={Darknight.Desc} />
      </div> */}
    </div>
  </>)
}

export default Card1;