import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx'
const Navbar = () => {
    const navigate = useNavigate();
    const [toggleNav, setToggleNav] = useState(false);
    return (
        <div className={`n-wrapper ${toggleNav && "parent-active"}`}>
            <div className="n-left">
                <div className="n-name">BotWhizz</div>
                <span>
                    <button
                        onClick={() => {
                            navigate("Demo");
                        }}
                        className="button btn d-none"
                        style={{ width: "85px" }}
                    >
                        Demo
                    </button>
                </span>
            </div>
            {/* <ClickAwayListener onClickAway={()=>setToggleNav(false)}> */}
            <div className={`n-right ${toggleNav && "active-navbar"}`}  >
                <div className={'cross'} onClick={() => setToggleNav(false)}>
                    <RxCross2 />
                </div>
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link
                            spy={true}
                            to="Navbar"
                            smooth={true}
                            activeClass="activeClass"
                        >
                            <li> Home</li>
                        </Link>
                        <Link /* spy={true} */ to="About" smooth={true}>
                            <li>About</li>
                        </Link>
                        <Link /* spy={true} */ to="Services" smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link /* spy={true} */ to="Contact" smooth={true}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <span>
                    <button
                        onClick={() => {
                            navigate("Demo");
                        }}
                        className="button btn ham-btn"
                        style={{ width: "85px" }}
                    >
                        Demo
                    </button>
                </span>
                <button
                    onClick={() => {
                        navigate("Login");
                    }}
                    className="button n-button"
                >
                    Login/Register
                </button>
            </div>
            {/* </ClickAwayListener> */}
            <div className="ham-menu" onClick={() => setToggleNav(true)}>
                <GiHamburgerMenu />
            </div>
        </div>
    );
};

export default Navbar;
