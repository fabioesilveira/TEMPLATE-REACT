import { NavLink } from "react-router-dom";
import "./navBar.css"


function Navbar() {
    return (
        <nav>
            <NavLink to="/" >Home</NavLink>
            {/* <NavLink to="/" >Home</NavLink> */}
        </nav>
    )
}

export default Navbar;