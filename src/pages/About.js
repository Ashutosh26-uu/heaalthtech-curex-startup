import React from 'react';

const About = () => {
  return (
    <div className="page">
      <div className="hero">
        <h1>About Curelex</h1>
        <p>Bridging the gap between rural and urban healthcare</p>
      </div>
      
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          Curelex is a next-generation hybrid e-clinic model designed to bring super-speciality healthcare, 
          telemedicine, diagnostics, pathology, and pharmacy support to rural and semi-urban communities — 
          without performing any invasive procedures. We provide pure OPD-based services focused on accurate 
          consultation and timely treatment.
        </p>
      </div>
      
      <div className="section">
        <h2>How We Work</h2>
        <p>
          At Curelex, patients visit their nearest e-clinic where a qualified junior doctor performs physical 
          examination, checks vitals, and documents medical history. During the same visit, the patient is 
          connected to a super-specialist through secure telemedicine, ensuring expert diagnosis without 
          travelling to big cities.
        </p>
      </div>
      
      <div className="section">
        <h2>Our Care Model</h2>
        <p>
          Curelex centres follow a zero-invasive care model (only OPD). For complete clinical support, 
          we have partnerships with:
        </p>
        <ul style={{fontSize: '1.1rem', lineHeight: '2', marginTop: '1rem'}}>
          <li><strong>Pathology / laboratory service providers</strong> for sample collection and reporting</li>
          <li><strong>Nearby pharmacies</strong> for quick access to prescribed medicines</li>
          <li><strong>Hospitals</strong> for referral and admission only when required</li>
        </ul>
        <p style={{marginTop: '1.5rem'}}>
          This ensures that every patient gets the right doctor, right diagnosis, and right treatment at the 
          right time, while maintaining full safety, transparency, and affordability.
        </p>
      </div>
      
      <div className="section">
        <h2>Our Vision</h2>
        <p>
          We believe that quality healthcare should reach everyone, not just metropolitan cities. Curelex is 
          committed to bridging the gap between rural and urban healthcare by combining modern telemedicine 
          with physical doctor support for trustworthy, personalised care.
        </p>
        <p style={{marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: '#2c5aa0'}}>
          Curelex — Telemedicine that feels like offline care.
        </p>
      </div>
    </div>
  );
};

export default About;