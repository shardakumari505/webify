import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import Card1 from "../../../Components/Card1/card1.components";
import MoviePage from "../../../Components/Movie-Page/movie-page.components";

import { Link } from "react-router-dom";
import { Grave, LionKing, SpiderMan, Spiritedaway, Yourname } from "../../../moviedata";

const GraveofFireflies = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={Grave.MovieName} ReleaseYear={Grave.ReleaseYear} Desc={Grave.Desc} IMDB={Grave.IMDB} Director={Grave.Director} Duration={Grave.Duration} Cast={Grave.Cast} Genre={Grave.Genre} Certification={Grave.Certification} Language={Grave.Language} Distribution={Grave.Distribution} mimgUrl={Grave.mimgUrl} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/lionking-movie'><Card1
                    MovieName={LionKing.MovieName}
                    Desc={LionKing.Desc}
                    imgUrl={LionKing.imgUrl}
                    IMDB={LionKing.IMDB}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/spiderman-movie'><Card1
                    MovieName={SpiderMan.MovieName}
                    Desc={SpiderMan.Desc}
                    imgUrl={SpiderMan.imgUrl}
                    IMDB={SpiderMan.IMDB}
                /></Link></div>
                    <div className="card3-container-movie"> <Link className="movie-link" to='/spiritedaway-movie'><Card1
                    MovieName={Spiritedaway.MovieName}
                    Desc={Spiritedaway.Desc}
                    imgUrl={Spiritedaway.imgUrl}
                    IMDB={Spiritedaway.IMDB}
                /></Link></div>
                    <div className="card4-container-movie"><Link className="movie-link" to='/yourname-movie'><Card1
                    MovieName={Yourname.MovieName}
                    Desc={Yourname.Desc}
                    imgUrl={Yourname.imgUrl}
                    IMDB={Yourname.IMDB}
                /></Link></div>
                </div>
            </div>
        </div>
    );
}

export default GraveofFireflies;