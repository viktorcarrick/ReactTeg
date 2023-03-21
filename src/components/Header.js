import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render (){
        return (
            <header>
                <div className="grid-item1">
                    <div className="logocontainer">
                        <img src ="/TegsPizzeria.png" alt="Bild på logga"/>
                     </div>
                    <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Hem</NavLink></li>
                            <li><NavLink to="/meny">Meny</NavLink></li>
                            <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                            <li><NavLink to="/omoss">Om oss</NavLink></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>
                </div>
            </header>
        )
    }
}

export default Header;