import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navstyles.css"

import React from "react";

function Nav() {
  return (
    <div>
      <header>
        <nav className="navContainer">
          <Link to="/" id="navlogo">Josey.Dev</Link>
          <div className="navmenu">
            <ul className="navList">
              <li className="navItem">
                <Link to="/"className="links">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/about" className="links">About</Link>
              </li>
              <li className="navItem">
                <Link to="/portfolio" className="links">Projects</Link>
              </li>
              <li className="navItem">
                <Link to="/contact" className="links" id="btn">Contact</Link>
              </li>
            </ul>
           
            
            {/* <div className="closeNav">
              <i class="ri-close-line" className="close">X</i>
            </div> */}
            </div>
            <div className="navToggler">
              <i class="ri-apps-2-line"></i>
            </div>
            </nav>
          </header>
         
          {/* <div className="navActions">
           
          </div> */}
    </div>
  );
}

export default Nav;
