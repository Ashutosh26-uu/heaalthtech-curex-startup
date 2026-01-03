import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to Curelex</h1>
        <p>Next-generation hybrid e-clinic model bringing super-speciality healthcare to rural and semi-urban communities</p>
      </div>
      
      <div className="section">
        <h2>Telemedicine that feels like offline care</h2>
        <p>
          Curelex is revolutionizing healthcare delivery by combining modern telemedicine with physical doctor support, 
          ensuring quality healthcare reaches everyone, not just metropolitan cities.
        </p>
      </div>
      
      <div className="section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🏥 E-Clinic Consultations</h3>
            <p>Visit your nearest e-clinic for physical examination and expert telemedicine consultation</p>
          </div>
          <div className="service-card">
            <h3>🩺 Super-Specialist Access</h3>
            <p>Connect with super-specialists through secure telemedicine without traveling to big cities</p>
          </div>
          <div className="service-card">
            <h3>🔬 Diagnostic Support</h3>
            <p>Pathology and laboratory services with sample collection and reporting</p>
          </div>
          <div className="service-card">
            <h3>💊 Pharmacy Partnership</h3>
            <p>Quick access to prescribed medicines through our pharmacy network</p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>Why Choose Curelex?</h2>
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ Zero-invasive care model (OPD only)</li>
          <li>✅ Right doctor, right diagnosis, right treatment</li>
          <li>✅ Full safety, transparency, and affordability</li>
          <li>✅ Bridging rural-urban healthcare gap</li>
          <li>✅ Qualified junior doctors + super-specialist support</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;