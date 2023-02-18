import React, { useState } from "react";
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import "./header.css";
import { Link } from 'react-scroll';

const Header = () => {

    //Navbar color change
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'header header-scroll leftMenuScroll navUlScroll' : 'header'} id={"hero"}>
            <div className="leftMenu">
                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>MODEM : Monument detection from satelite image</Link>
            </div>
            <div className="midMenu">
                <ul className="navUl">
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="samples" spy={true} smooth={true} offset={50} duration={500}>Samples</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                </ul>
            </div>
            <div className="rightMenu">
                <a href="https://github.com/anikthaku/MODEM" target="_blank" >
                    <img src={github} />
                </a>
                <a href="https://www.linkedin.com/in/aniket-thakur-6a9a3a110/" target="_blank" >
                    <img src={linkedin} />
                </a>
            </div>
        </div >
    );
};

export default Header;