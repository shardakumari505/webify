import React, { useState } from "react";
import './genres-card.styles.scss';
import { Link } from "react-router-dom";

const GenresCard = () => {
    const [is1Active, set1Active] = useState(true);
    const [is2Active, set2Active] = useState(false);
    const [is3Active, set3Active] = useState(false);
    const [is4Active, set4Active] = useState(false);
    const [is5Active, set5Active] = useState(false);

    const HandleClick1 = () => {
        set1Active(!is1Active)
        set2Active(false)
        set3Active(false)
        set4Active(false)
        set5Active(false)

    }
    const HandleClick2 = () => {
        set1Active(false)
        set2Active(!is2Active)
        set3Active(false)
        set4Active(false)
        set5Active(false)
    }

    const HandleClick3 = () => {
        set1Active(false)
        set2Active(false)
        set3Active(!is3Active)
        set4Active(false)
        set5Active(false)
    }

    const HandleClick4 = () => {
        set1Active(false)
        set2Active(false)
        set3Active(false)
        set4Active(!is4Active)
        set5Active(false)
    }

    const HandleClick5 = () => {
        set1Active(false)
        set2Active(false)
        set3Active(false)
        set4Active(false)
        set5Active(!is5Active)
    }
    return (
        <div id="genres-card-container" className="genres-card-container">
            {/* <Link className="genres-card horror" to="/horrorpage" >
                <div className="genres-card horror" id='horror-page'>
                    <h5 className="">Horror</h5>
                </div>
            </Link>

            <Link className="genres-card romantic-comedy" to="/romanticcomedypage" >
                <div className="genres-card romantic-comedy" id='romantic-comedy-page'>
                    <h5 className="">Romantic Comedy</h5>
                </div>
            </Link>

            <Link className="genres-card mystery" to="/mysterypage" >
                <div className="genres-card mystery" id='mystery-page'>
                    <h5 className="">Mystery</h5>
                </div>
            </Link>

            <Link className="genres-card anime" to="/animepage" >
                <div className="genres-card anime" id='anime-page'>
                    <h5 className="">Anime</h5>
                </div>
            </Link>

            <Link className="genres-card action" to="/actionpage" >
                <div className="genres-card action" id='action-page'>
                    <h5 className="">Action</h5>
                </div>
            </Link> */}

            <div className="genres-container">
                <div className={is1Active ? "genre-panel active" : "genre-panel"} onClick={HandleClick1} style={{ backgroundImage: `url(https://wallpapers.com/images/hd/horror-wallpaper-wipqucukh5wolwuu.jpg)` }}>
                    <Link className="genres-card horror" to="/horrorpage" ><h3 className="genre-title">Horror</h3></Link>
                </div>

                <div className={is2Active ? "genre-panel active" : "genre-panel"} onClick={HandleClick2} style={{ backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=2000')` }}>
                    <Link className="genres-card romantic-comedy" to="/romanticcomedypage" ><h3 className="genre-title">Romantic Comedy</h3></Link>
                </div>
                <div className={is3Active ? "genre-panel active" : "genre-panel"} onClick={HandleClick3} style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2wMOKuQsDBuJlhHCiUhwpaNfAh6PORe9nA&usqp=CAU')` }}>
                    <Link className="genres-card mystery" to="/mysterypage" ><h3 className="genre-title">Mystery</h3></Link>
                </div>
                <div className={is4Active ? "genre-panel active" : "genre-panel"} onClick={HandleClick4} style={{ backgroundImage: `url('https://wallpaperaccess.com/full/5112296.jpg')` }}>
                    <Link className="genres-card anime" to="/animepage" ><h3 className="genre-title">Anime</h3></Link>
                </div>
                <div className={is5Active ? "genre-panel active" : "genre-panel"} onClick={HandleClick5} style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp3173712.jpg')` }}>
                    <Link className="genres-card action" to="/actionpage" ><h3 className="genre-title">Action</h3></Link>
                </div>
            </div>

        </div>
    );
}

export default GenresCard;