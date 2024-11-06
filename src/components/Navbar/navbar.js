import React from 'react';
import './navbar.css';
import shri from "../../images/pictures/shrimann2023.png";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={shri} alt="C++" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Experience</Link>
                <Link className="desktopMenuListItem">Education</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Certifications</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={shri} alt="Contact ME Button" className='desktopMenuImg' />Contact Me
            </button>
            
        </nav>
    )
}

export default Navbar;