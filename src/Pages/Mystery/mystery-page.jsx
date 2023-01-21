import React from "react";
import './mystery-page.styles.scss';
import Card from "../../Components/Card/card.component";
import Card1 from "../../Components/Card1/card1.components";
import { Link } from "react-router-dom";
import { LivesofOthers, MirrorGame, RearWindow, Seven, SilenceofLambs } from "../../moviedata";
import $ from 'jquery';
import useSound from 'use-sound';
import Mysterysong from './mysterysong.mp3'

const MysteryPage = () => {
    const [play, { stop }] = useSound(Mysterysong);

    return (
        <div className="mystery-page-container">
            {/* <button className="mysterysong-button" onMouseEnter={() => play()} onMouseLeave={() => stop()}> */}
            <div className="mystery-page-title-text">Mystery</div>
            <div className="mystery-movie-container">
                <Link className="movie-link" to='/livesofothers-movie'><Card
                    MovieName={LivesofOthers.MovieName}
                    Desc={LivesofOthers.Desc}
                    IMDB={LivesofOthers.IMDB}
                    imgUrl={LivesofOthers.imgUrl}
                /></Link>
                <Link className="movie-link" to='/mirrorgame-movie'><Card
                    MovieName={MirrorGame.MovieName}
                    Desc={MirrorGame.Desc}
                    IMDB={MirrorGame.IMDB}
                    imgUrl={MirrorGame.imgUrl}
                /></Link>
                <Link className="movie-link" to='/rearwindow-movie'><Card
                    MovieName={RearWindow.MovieName}
                    Desc={RearWindow.Desc}
                    IMDB={RearWindow.IMDB}
                    imgUrl={RearWindow.imgUrl}
                /></Link>
                <Link className="movie-link" to='/seven-movie'><Card
                    MovieName={Seven.MovieName}
                    Desc={Seven.Desc}
                    IMDB={Seven.IMDB}
                    imgUrl={Seven.imgUrl}
                /></Link>
                <Link className="movie-link" to='/silenceoflambs-movie'><Card
                    MovieName={SilenceofLambs.MovieName}
                    Desc={SilenceofLambs.Desc}
                    IMDB={SilenceofLambs.IMDB}
                    imgUrl={SilenceofLambs.imgUrl}
                /></Link>
            </div>
            {/* </button> */}
        </div>
    );
    }

export default MysteryPage;