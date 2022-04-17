import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
   <div className="container">
   <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
  </div>
  </div>

</nav>
  )
}

export default Navbar