import React, { useRef } from "react";
import './anime-page.styles.scss';
import Card from "../../Components/Card/card.component";
import { Link } from "react-router-dom";

import { Grave, LionKing, SpiderMan, Spiritedaway, Yourname } from "../../moviedata";

const AnimePage = () => {

    const h1Ref = useRef(null);
    const handleInput = () => {
        h1Ref.current.setAttribute("data-heading", h1Ref.current.innerText);
    };



        return (
            <div className="anime-page-container">
                <div className="anime-page-title-text"><h1 className="anime-title-h1" ref={h1Ref} onInput={handleInput} contenteditable data-heading="Anime">
                    Anime
                </h1></div>
                <div className="anime-movie-container">
                    <Link className="movie-link" to='/graveoffireflies-movie'><Card
                        MovieName={Grave.MovieName}
                        Desc={Grave.Desc}
                        imgUrl={Grave.imgUrl}
                        IMDB={Grave.IMDB}
                    /></Link>

                    <Link className="movie-link" to='/lionking-movie'><Card
                        MovieName={LionKing.MovieName}
                        Desc={LionKing.Desc}
                        imgUrl={LionKing.imgUrl}
                        IMDB={LionKing.IMDB}
                    /></Link>

                    <Link className="movie-link" to='/spiderman-movie'><Card
                        MovieName={SpiderMan.MovieName}
                        Desc={SpiderMan.Desc}
                        imgUrl={SpiderMan.imgUrl}
                        IMDB={SpiderMan.IMDB}
                    /></Link>

                    <Link className="movie-link" to='/spiritedaway-movie'><Card
                        MovieName={Spiritedaway.MovieName}
                        Desc={Spiritedaway.Desc}
                        imgUrl={Spiritedaway.imgUrl}
                        IMDB={Spiritedaway.IMDB}
                    /></Link>
                    <Link className="movie-link" to='/yourname-movie'><Card
                        MovieName={Yourname.MovieName}
                        Desc={Yourname.Desc}
                        imgUrl={Yourname.imgUrl}
                        IMDB={Yourname.IMDB}
                    /></Link>

                </div>
            </div>
        );
    }

export default AnimePage;