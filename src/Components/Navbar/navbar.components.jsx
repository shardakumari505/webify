import React from "react";
import './navbar.styles.scss';
import SearchIcon from "../search-icon/search-icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollTop);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollTop);
      }
    
      handleScrollTop = () => {
        if (window.scrollY > 20) {
          document.querySelector(".navbar-container").className = "navbar-container scroll";
        } 
        else {
          document.querySelector(".navbar-container").className = "navbar-container";
        }
      };

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-container-left">
                <h3 className="navbar-text title">BingeWatch</h3>
                  <a className="navbar-text" href='#'>Home</a>
                  <a className="navbar-text" href='#horror-page'>Horror</a>
                  <a className="navbar-text" href='#romantic-comedy-page'>Romantic Comedy</a>
                  <a className="navbar-text" href='#mystery-page'>Mystery</a>
                  <a className="navbar-text" href='#anime-page'>Anime</a>
                  <a className="navbar-text" href='#action-page'>Action</a>
                </div>

                <div className="navbar-container-centre">
                  {/* <div className="search-icon-navbar"><SearchIcon /></div> */}
                </div>

                <div className="navbar-container-right">
                    <div className="bell-icon-navbar"><FontAwesomeIcon className="bell-icon" icon={faUser} /></div>
                </div>
            </div>
        )
    }
}

export default Navbar;