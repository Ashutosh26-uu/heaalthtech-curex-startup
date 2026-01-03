import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare solutions for rural and semi-urban communities</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>E-Clinic Consultations</h3>
            <p>
              Visit your nearest Curelex e-clinic where qualified junior doctors perform comprehensive
              physical examinations, check vitals, and document your complete medical history.
            </p>
            <ul>
              <li>Physical examination</li>
              <li>Vital signs monitoring</li>
              <li>Medical history documentation</li>
              <li>Initial diagnosis</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">👨⚕️</div>
            <h3>Super-Specialist Telemedicine</h3>
            <p>
              Connect with super-specialists through secure telemedicine during your clinic visit.
              Get expert diagnosis and treatment recommendations without traveling to big cities.
            </p>
            <ul>
              <li>Cardiology consultations</li>
              <li>Dermatology sessions</li>
              <li>Pediatric care</li>
              <li>General medicine</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Diagnostic & Pathology</h3>
            <p>
              Complete diagnostic support through our network of pathology and laboratory service
              providers for accurate sample collection and timely reporting.
            </p>
            <ul>
              <li>Blood tests</li>
              <li>Urine analysis</li>
              <li>X-ray services</li>
              <li>ECG monitoring</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">💊</div>
            <h3>Pharmacy Network</h3>
            <p>
              Quick access to prescribed medicines through our partnership with nearby pharmacies,
              ensuring you get the right medication at the right time.
            </p>
            <ul>
              <li>Prescription medicines</li>
              <li>Generic alternatives</li>
              <li>Medicine delivery</li>
              <li>Dosage guidance</li>
            </ul>
          </div>



          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Digital Health Records</h3>
            <p>
              Maintain complete digital health records accessible to you and your healthcare
              providers for continuity of care.
            </p>
            <ul>
              <li>Medical history</li>
              <li>Prescription records</li>
              <li>Test reports</li>
              <li>Treatment plans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;