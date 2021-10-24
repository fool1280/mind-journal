import { useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 75) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="logo">
                <Link to="/">M-J</Link>
            </div>
            <ul className="nav-dropdwon">
                <li>
                    <Link to="/#how-iw">How it works</Link>
                </li>
                <li>
                    <Link to="/features">Features</Link>
                </li>
                <li>
                    <Link to="/demo">Demo</Link>
                </li>
                <li>FAQ</li>
            </ul>
            <div className="sign-in">Sign in</div>
        </nav>
    );
};

export default Navbar;
