import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">SPS</Link>
        </div>
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          Menu
        </button>
        <nav id="main-nav" className={menuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/academics" onClick={toggleMenu}>Academics</Link></li>
            <li><Link to="/admissions" onClick={toggleMenu}>Admissions</Link></li>
            <li><Link to="/faculty" onClick={toggleMenu}>Faculty</Link></li>
            <li><Link to="/students" onClick={toggleMenu}>Students</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;