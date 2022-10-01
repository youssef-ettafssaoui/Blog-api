import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=front">
            <h6>FRONT</h6>
          </Link>
          <Link className="link" to="/?cat=back">
            <h6>BACK</h6>
          </Link>
          <Link className="link" to="/?cat=mobile">
            <h6>MOBILE</h6>
          </Link>
          <Link className="link" to="/?cat=ia">
            <h6>IA</h6>
          </Link>
          <Link className="link" to="/?cat=databases">
            <h6>DATABASES</h6>
          </Link>
          <Link className="link" to="/?cat=networks">
            <h6>NETWORKS</h6>
          </Link>
          <span>YOUSSEF</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
