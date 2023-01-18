import React from "react";
import './navbar.styles.scss';
import SearchIcon from "../search-icon/search-icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
                <h3 className="navbar-text navbar-title">BingeWatch</h3>
                  <Link className="navbar-text" to='/'>Home</Link>
                  <Link className="navbar-text" to='/horrorpage'>Horror</Link>
                  <Link className="navbar-text" to='/romanticcomedypage'>Romantic Comedy</Link>
                  <Link className="navbar-text" to='/mysterypage'>Mystery</Link>
                  <Link className="navbar-text" to='/animepage'>Anime</Link>
                  <Link className="navbar-text" to='/actionpage'>Action</Link>
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