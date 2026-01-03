import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.jpeg" alt="Curelex Logo" />
          <h2>Curelex</h2>
        </div>
        
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('services')} className="nav-link">Services</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
        
        <div className="nav-buttons">
          <button className="btn btn-primary">Book Consultation</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;