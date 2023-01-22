import React from "react";
import './Lives-of-others-movie.styles.scss';
import MoviePage from "../../../Components/Movie-Page/movie-page.components";
import { Link } from "react-router-dom";
import Card1 from "../../../Components/Card1/card1.components";
import {LivesofOthers, MirrorGame, RearWindow, Seven, SilenceofLambs } from "../../../moviedata"


const SevenPage = () => {
    return(
        <div className="seven-movie-container">
            <MoviePage MovieName={Seven.MovieName} ReleaseYear={Seven.ReleaseYear} Desc={Seven.Desc} IMDB={Seven.IMDB} Director={Seven.Director} Duration={Seven.Duration} Cast={Seven.Cast} Genre={Seven.Genre} Certification={Seven.Certification} Language={Seven.Language} Distribution={Seven.Distribution} />
            <div className="more-movie-movie-container">            
                <div className="more-text-container">More like These</div>
                <div className="movie-movie-cards-container">
                    <div className="card1-container-movie"> <Link className="movie-link" to='/mirrorgame-movie'><Card1
                    MovieName={MirrorGame.MovieName}
                    Desc={MirrorGame.Desc}
                    IMDB={MirrorGame.IMDB}
                    imgUrl={MirrorGame.imgUrl}
                /></Link></div>
                    <div className="card2-container-movie"><Link className="movie-link" to='/rearwindow-movie'><Card1
                    MovieName={RearWindow.MovieName}
                    Desc={RearWindow.Desc}
                    IMDB={RearWindow.IMDB}
                    imgUrl={RearWindow.imgUrl}
                /></Link></div>
                    <div className="card3-container-movie"><Link className="movie-link" to='/livesofothers-movie'><Card1
                    MovieName={LivesofOthers.MovieName}
                    Desc={LivesofOthers.Desc}
                    IMDB={LivesofOthers.IMDB}
                    imgUrl={LivesofOthers.imgUrl}
                /></Link></div>
                    <div className="card4-container-movie"> <Link className="movie-link" to='/silenceoflambs-movie'><Card1
                    MovieName={SilenceofLambs.MovieName}
                    Desc={SilenceofLambs.Desc}
                    IMDB={SilenceofLambs.IMDB}
                    imgUrl={SilenceofLambs.imgUrl}
                /></Link></div>
                </div>
            </div>
        </div>
    );
}

export default SevenPage;