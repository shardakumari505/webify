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
            <div className="action-page-title-text">ACTION</div>
            <div className="action-movie-container">
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