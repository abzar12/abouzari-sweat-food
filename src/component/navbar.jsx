import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Navbar() {
    const [isvalid, setIsValid] = useState(false);
    const ShowNavbar = () => {
        setIsValid(!isvalid)
    }
    const navItem = [
        { id: 1, name: "Home", url: "home" },
        { id: 2, name: "Menu", url: "menu" },
        { id: 3, name: "Gallery", url: "gallery" },
        { id: 4, name: "About", url: "about" },
        { id: 5, name: "Contact", url: "contact" }
    ]
    return (
        <>
            <div className="navbar" >
                <ul className="Items">
                    {
                        navItem.map(item => (
                            <li key={item.id}> <Link smooth={true} duration={500} to={item.url} className="Nav-item" >{item.name}</Link> </li>
                        ))
                    }
                </ul>
                <div className="NavIcon" onClick={ShowNavbar}>
                    < FaBars className="MenuIcon" />
                </div>
                {
                     isvalid && (
                        <ul className="Menu-Items">
                            {
                                navItem.map(item => (
                                    <li key={item.id}> <Link smooth={true} duration={500} to={item.url} className="Nav-item" >{item.name}</Link> </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </>
    )
}
export default Navbar;