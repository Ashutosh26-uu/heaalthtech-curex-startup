import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Curelex</h2>
          <p>Bridging the gap between rural and urban healthcare</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Curelex is a next-generation hybrid e-clinic model designed to bring super-speciality healthcare, 
              telemedicine, diagnostics, pathology, and pharmacy support to rural and semi-urban communities — 
              without performing any invasive procedures. We provide pure OPD-based services focused on accurate 
              consultation and timely treatment.
            </p>
            
            <p>
              At Curelex, patients visit their nearest e-clinic where a qualified junior doctor performs physical 
              examination, checks vitals, and documents medical history. During the same visit, the patient is 
              connected to a super-specialist through secure telemedicine, ensuring expert diagnosis without 
              travelling to big cities.
            </p>
            
            <div className="care-model">
              <h3>Our Zero-Invasive Care Model</h3>
              <p>
                Curelex centres follow a zero-invasive care model (only OPD). For complete clinical support, 
                we have partnerships with:
              </p>
              <ul>
                <li><strong>Pathology / laboratory service providers</strong> for sample collection and reporting</li>
                <li><strong>Nearby pharmacies</strong> for quick access to prescribed medicines</li>
                <li><strong>Hospitals</strong> for referral and admission only when required</li>
              </ul>
            </div>
            
            <p>
              This ensures that every patient gets the right doctor, right diagnosis, and right treatment at the 
              right time, while maintaining full safety, transparency, and affordability.
            </p>
            
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                We believe that quality healthcare should reach everyone, not just metropolitan cities. Curelex is 
                committed to bridging the gap between rural and urban healthcare by combining modern telemedicine 
                with physical doctor support for trustworthy, personalised care.
              </p>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h4>E-Clinic Network</h4>
              <p>Physical examination by qualified doctors</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h4>Super-Specialist Access</h4>
              <p>Telemedicine with expert doctors</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h4>Diagnostic Support</h4>
              <p>Complete pathology and lab services</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h4>Pharmacy Network</h4>
              <p>Quick access to medicines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;