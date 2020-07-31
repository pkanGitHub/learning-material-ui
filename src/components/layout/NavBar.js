import React from 'react'
import "./NavBar.css"

import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>P-KAN</li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;