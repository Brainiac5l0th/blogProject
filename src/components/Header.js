import React from "react";
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-new">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Header;