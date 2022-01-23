import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
    <div className='container'>
    <Link smooth={true} to="home" className="navbar-brand" href="#">AMIRREZA HELALI</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li class="nav-item active">
          <Link smooth={true} to="home" offset={-100} class="nav-link" href="#">Home <span class="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-70} className="nav-link" href="#">About Me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="education" offset={-110} className="nav-link" href="#">Education</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="skills" offset={-70} className="nav-link" href="#">Skills</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
        </li>
      </ul>
    </div>
    </div>
</nav>
    )
}

export default Navbar;
