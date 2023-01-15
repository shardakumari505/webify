import React from "react";
import './navbar.styles.scss';
import SearchIcon from "../search-icon/search-icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector(".navbar-container").className = "navbar-container scroll";
        } else {
          document.querySelector(".navbar-container").className = "navbar-container";
        }
      };

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-container-left">
                <h3 className="navbar-text title">BingeWatch</h3>
                  <span className="navbar-text">Home</span>
                  <span className="navbar-text">Horror</span>
                  <span className="navbar-text">Romantic Comedy</span>
                  <span className="navbar-text">Mystery</span>
                  <span className="navbar-text">Anime</span>
                  <span className="navbar-text">Action</span>
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