import React from "react";
import './anime-page.styles.scss';
import Card from "../../Components/Card/card.component";
import { Link } from "react-router-dom";

import { Grave, LionKing, SpiderMan, Spiritedaway, Yourname } from "../../moviedata";

class AnimePage extends React.Component {


    render(){
    return (
        <div className="anime-page-container">
            <div className="anime-page-title-text">Anime</div>
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
}

export default AnimePage;