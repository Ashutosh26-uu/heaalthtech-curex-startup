import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Curelex Healthcare</h1>
          <h2>Telemedicine that feels like offline care</h2>
          <p>
            Next-generation hybrid e-clinic model bringing super-speciality healthcare, 
            telemedicine, diagnostics, pathology, and pharmacy support to rural and 
            semi-urban communities.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">Book Consultation</button>
            <button className="btn btn-outline btn-large">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>E-Clinics</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Specialists</p>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Patients Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;