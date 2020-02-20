import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props){
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">sTutor</Link>
        </div>
        <ul className="nav navbar-nav">
            <li><Link to="/">Current Tutions</Link></li>
            <li><Link to="/analytics">Analytics Dashboard</Link></li>
        </ul>
        </div>
    </nav>
}

export default Navbar;