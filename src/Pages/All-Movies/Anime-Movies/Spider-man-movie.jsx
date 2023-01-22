import React from "react";
import './Grave-of-fireflies-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import Card1 from "../../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { Grave, LionKing, SpiderMan, Spiritedaway, Yourname } from "../../../moviedata";

const SpidermanPage = () => {
    return(
        <div className="alien-movie-container">
            <MoviePage MovieName={SpiderMan.MovieName} ReleaseYear={SpiderMan.ReleaseYear} Desc={SpiderMan.Desc} IMDB={SpiderMan.IMDB} Director={SpiderMan.Director} Duration={SpiderMan.Duration} Cast={SpiderMan.Cast} Genre={SpiderMan.Genre} Certification={SpiderMan.Certification} Language={SpiderMan.Language} Distribution={SpiderMan.Distribution} mimgUrl={SpiderMan.mimgUrl} />
            <div className="more-movie-movie-container" id="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"><Link className="movie-link" to='/lionking-movie'><Card1
                    MovieName={LionKing.MovieName}
                    Desc={LionKing.Desc}
                    imgUrl={LionKing.imgUrl}
                    IMDB={LionKing.IMDB}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/grave-movie'><Card1
                    MovieName={Grave.MovieName}
                    Desc={Grave.Desc}
                    imgUrl={Grave.imgUrl}
                    IMDB={Grave.IMDB}
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

export default SpidermanPage;