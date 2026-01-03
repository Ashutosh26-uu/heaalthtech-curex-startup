import React from 'react';

const Services = () => {
  return (
    <div className="page">
      <div className="hero">
        <h1>Our Services</h1>
        <p>Comprehensive healthcare solutions for rural and semi-urban communities</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <h3>🏥 E-Clinic Consultations</h3>
          <p>
            Visit your nearest Curelex e-clinic where qualified junior doctors perform comprehensive 
            physical examinations, check vitals, and document your complete medical history.
          </p>
        </div>
        
        <div className="service-card">
          <h3>👨‍⚕️ Super-Specialist Telemedicine</h3>
          <p>
            Connect with super-specialists through secure telemedicine during your clinic visit. 
            Get expert diagnosis and treatment recommendations without traveling to big cities.
          </p>
        </div>
        
        <div className="service-card">
          <h3>🔬 Diagnostic & Pathology</h3>
          <p>
            Complete diagnostic support through our network of pathology and laboratory service 
            providers for accurate sample collection and timely reporting.
          </p>
        </div>
        
        <div className="service-card">
          <h3>💊 Pharmacy Network</h3>
          <p>
            Quick access to prescribed medicines through our partnership with nearby pharmacies, 
            ensuring you get the right medication at the right time.
          </p>
        </div>
        
        <div className="service-card">
          <h3>🏨 Hospital Referrals</h3>
          <p>
            When advanced care is needed, we provide seamless referrals to partner hospitals 
            for admission and specialized treatment.
          </p>
        </div>
        
        <div className="service-card">
          <h3>📱 Digital Health Records</h3>
          <p>
            Maintain complete digital health records accessible to you and your healthcare 
            providers for continuity of care.
          </p>
        </div>
      </div>
      
      <div className="section">
        <h2>Our Zero-Invasive Care Promise</h2>
        <p>
          All Curelex centres follow a strict zero-invasive care model, focusing purely on OPD-based 
          services. We ensure accurate consultation and timely treatment while maintaining the highest 
          standards of safety, transparency, and affordability.
        </p>
      </div>
    </div>
  );
};

export default Services;