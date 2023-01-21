import React from "react";
import './action-page.styles.scss';
import { Link } from "react-router-dom";
import Card from "../../Components/Card/card.component";
import { Darknight } from "../../moviedata";
import { LordOfTheRings } from "../../moviedata";
import { Inception } from "../../moviedata";
import { Matrix } from "../../moviedata";
import { StarWars } from "../../moviedata";
import 'animate.css';
import $ from 'jquery';


const ActionPage = () => {

    // $(document).mousemove(e => {
    //     $('.custom-cursor').position({
    //       my: 'left center',
    //       of: e,
    //       collision: 'none'
    //     });
    //   });

    //   let mouseCursor = document.querySelector(".custom-cursor");

    //   window.addEventListener("mousemove", custom-cursor);

    return (
        <div className="action-page-container">

<div class="custom-cursor">
  <svg>
    <path fill="#1A1A1A" d="M153.7,166.6c0,0-7.3-22.3-14.4-28.4v15.4c0,0-4.5-13.9-10.6-17.3l-3.8-8.5l-1.6,4.8l-2.1-3.5l-2.4,6.8l-3.1-5.9c0,0-4.5,4-5.5,8.8c0,0-2.8-2.8-2.4-5.2c0,0-8.1,9.9-8,15.2l-4.7-11.6l-7.6,8.8l-0.9-4.5l-5,5.5l-6.2-1L61,150.7l8.7-10.4l-34.5,15.1l7.6-9.9l22.5-10.7l-43.8,9.9l8.3-6.6c0,0,21.3-7.3,20.6-7.3c-0.7,0-27.9-0.5-27.9-0.5l13.5-5.9h20.1l13.7-2.4l-15.9-3.8l20.1-1.4l5-6.2l19.9-4.2l-0.3-2.1h-3.3c0,0-1.6-5.7-10.4-1.4c0,0,2.1-5.4,9.9-6.2c0,0-0.3-2.9,2.6-3.8l1.7-3.1c0,0,5.9-0.5,14,5.9L126.8,79l11.1-6.2c0,0,2.3-10.4,4.5-11.8l1.2,6.1l6.4-19l0.9,9.7l5.2-15.2l9.9-8.1l-9.9,21.3l9.9-13.7l12.5-8.5l-6.6,13l-14,16.8l17.5-11.1l-5,8.1l-8.5,8.7l12.5-4.2c0,0-5,7.8-5,15.2l-12.6,5v1.9c0,0,8.8,1.7,13.7,5.2L154.9,93c0,0,6.4,2.8,9.7,6.2h-13.9c0,0,2.9,4.5,6.6,5c3.6,0.5,5.2,2.9,5.2,2.9l-16.6-1.9l6.2,6.1l-10.7,1.4l2.6,2.8c0,0-3.6-0.3-6.8,0.7l11.6,6.6l0.5,2.9l18.4,6.9l-17-1.6l2.6,2.9l16.6,5.4l-14.2,0.2l2.1,4.7l-8.5-4.7C149.4,139.6,155.2,157.6,153.7,166.6z"/>
  </svg>
</div>
            <div className="action-page-title-text">Action</div>
            <div className="action-movie-container animate__bounceInUp">
            {/* <Link className="main-card-container  dark-knight" to='/darkknight-movie'><Card MovieName={Darknight.MovieName} imgUrl={Darknight.imgUrl} Desc={Darknight.Desc} IMDB={Darknight.IMDB} /></Link> */}
             <Link className="movie-link" to='/darkknight-movie'><Card MovieName={Darknight.MovieName} imgUrl={Darknight.imgUrl} Desc={Darknight.Desc} IMDB={Darknight.IMDB} /></Link>
             <Link className="movie-link" to='/lordofrings-movie'><Card MovieName={LordOfTheRings.MovieName} imgUrl={LordOfTheRings.imgUrl} Desc={LordOfTheRings.Desc} IMDB={LordOfTheRings.IMDB}/></Link>
             <Link className="movie-link" to='/inception-movie'><Card MovieName={Inception.MovieName} imgUrl={Inception.imgUrl} Desc={Inception.Desc} IMDB={Inception.IMDB}/></Link>
             <Link className="movie-link" to='/matrix-movie'><Card MovieName={Matrix.MovieName} imgUrl={Matrix.imgUrl} Desc={Matrix.Desc} IMDB={Matrix.IMDB}/></Link>
             <Link className="movie-link" to='/starwars-movie'><Card MovieName={StarWars.MovieName} imgUrl={StarWars.imgUrl} Desc={StarWars.Desc} IMDB={StarWars.IMDB}/></Link>
             </div>

            </div>
        
    );
}

export default ActionPage;