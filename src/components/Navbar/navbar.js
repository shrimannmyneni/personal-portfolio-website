import React, {useState} from 'react';
import './navbar.css';
import shri from "../../images/pictures/shrimann2023.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={shri} alt="C++" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)}>Intro</Link>
                <Link activeClass='active' to='workExperience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)}>Work Experience</Link>
                <Link activeClass='active' to='educationSection' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)}>Education</Link>
                <Link activeClass='active' to='personalProjects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)}>Personal Projects</Link>
                <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" onClick={() =>setShowMenu(!showMenu)}>Certifications</Link>
            </div>
            
            <button className='desktopMenuBtn' onClick={() => {
                setTimeout(() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                })
            } }>
                Contact Me
            </button>

        </nav>
    )
}

export default Navbar;