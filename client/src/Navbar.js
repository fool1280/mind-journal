import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    // const changeBackground = ()=>{
    //     if(window.scrollY >= 75){
    //         setNavbar(true)
    //     }else{
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener("scroll", changeBackground)


    return ( 
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="logo">
                <Link to="/">
                    Mind-Journal
                </Link>
            </div>
            <ul className="nav-dropdwon">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/gallery">How it works</Link>
                </li>
                <li>
                    <Link to="/wallet">Features</Link>
                </li>
                <li>FAQ</li>
            </ul>
            <div className="sign-in">Sign in</div>
        </nav>
     );
}
 
export default Navbar;