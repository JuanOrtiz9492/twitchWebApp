import React from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.css'
const Navbar =()=> {
    return(
        <header className="mainHeader">
            <h1><NavLink to="/">nanopool monitor</NavLink></h1>
            <nav>
                <NavLink to="/demo"><button>Demo</button></NavLink>
                <NavLink to="/monitor"> <button>Try It</button> </NavLink>
            </nav>
        </header>
    );
}

export default Navbar