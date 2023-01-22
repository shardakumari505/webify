import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { Grave, LionKing, SpiderMan, Spiritedaway, Yourname } from "../../../moviedata";

const LionKingPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={LionKing.MovieName} ReleaseYear={LionKing.ReleaseYear} Desc={LionKing.Desc} IMDB={LionKing.IMDB} Director={LionKing.Director} Duration={LionKing.Duration} Cast={LionKing.Cast} Genre={LionKing.Genre} Certification={LionKing.Certification} Language={LionKing.Language} Distribution={LionKing.Distribution}  mimgUrl={LionKing.mimgUrl}/>
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/grave-movie'><Card1
                    MovieName={Grave.MovieName}
                    Desc={Grave.Desc}
                    imgUrl={Grave.imgUrl}
                    IMDB={Grave.IMDB}
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

export default LionKingPage;