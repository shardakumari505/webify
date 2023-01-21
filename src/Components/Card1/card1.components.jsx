import React,{useState} from "react";
import './card1.styles.scss';
import Imdb from './imdb.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Card from "../Card/card.component";
import { Darknight } from "../../moviedata";

const Card1 = () => {
  return (<>
    <div className="container">
      <div className="card">
        <Card MovieName={Darknight.MovieName} Desc={Darknight.Desc} />
        {/* <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div> */}
      </div>

      <div className="card">
        <h3 className="title">Card 2</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        {/* <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div> */}
      </div>

      <div className="card">
        <h3 className="title">Card 3</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        {/* <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div> */}
      </div>

      <div className="card">
        <h3 className="title">Card 4</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        {/* <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div> */}
      </div>
    </div>
  </>)
}

export default Card1;