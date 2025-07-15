import { Link } from "react-router-dom";

function Navbar() {
    const navItem = [
        { id: 1, name: "Home", url: "/As-code/home" },
        { id: 2, name: "Menu", url: "/As-code/menu" },
        { id: 3, name: "Gallery", url: "/As-code/gallery" },
        { id: 4, name: "About", url: "/As-code/about" },
        { id: 5, name: "Contact", url: "/As-code/contact" }
    ]
    return (
        <>
            <div className="navbar" >
                <ul>
                    {
                        navItem.map(item => (
                            <li key={item.id}> <Link to={item.url} className="Nav-item" >{item.name}</Link> </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default Navbar;