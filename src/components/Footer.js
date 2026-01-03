import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Curelex</h3>
          <p>Next-generation hybrid e-clinic model bringing super-speciality healthcare to rural and semi-urban communities.</p>
          <p><strong>Telemedicine that feels like offline care.</strong></p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong><br />
          C/O SHIV KUMARI DEVI<br />
          MUHMMADPUR PACHEWARA<br />
          Pachevara, Mirzapur, Chunar<br />
          Uttar Pradesh, India - 231305</p>
        </div>
        
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> contact.curelex@gmail.com</p>
          <p><strong>Phone:</strong><br />
          89578 09085<br />
          73553 95706</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://whatsapp.com/channel/0029Vb6h5rD90x2oWxVpiF1N" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              ✆
            </a>
            <a href="mailto:contact.curelex@gmail.com" title="Email">
              ✉
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook">
              f
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
              📷
            </a>
            <a href="https://www.youtube.com/@CurelexOfficial" target="_blank" rel="noopener noreferrer" title="YouTube">
              ▶
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Curelex Healthcare. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;