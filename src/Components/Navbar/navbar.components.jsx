import React from "react";
import './navbar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">Cine<span>Philes</span></h3></Link>
                  <Link className="navbar-text" to='/'>Home</Link>
                  <Link className="navbar-text" to='/horrorpage'>Horror</Link>
                  <Link className="navbar-text" to='/romanticcomedypage'>Romantic Comedy</Link>
                  <Link className="navbar-text" to='/mysterypage'>Mystery</Link>
                  <Link className="navbar-text" to='/animepage'>Anime</Link>
                  <Link className="navbar-text" to='/actionpage'>Action</Link>
                </div>

                <div className="navbar-container-right">
                    <Link className="navbar-text" to='/profile'><FontAwesomeIcon className="bell-icon" icon={faUser} /><h5>About Us</h5></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;