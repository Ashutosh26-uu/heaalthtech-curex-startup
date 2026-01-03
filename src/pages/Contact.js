import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <div className="hero">
        <h1>Contact Us</h1>
        <p>Get in touch with Curelex for healthcare solutions</p>
      </div>
      
      <div className="section">
        <h2>📍 Our Address</h2>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          <strong>Curelex Healthcare</strong><br />
          C/O SHIV KUMARI DEVI<br />
          MUHMMADPUR PACHEWARA<br />
          Pachevara, Mirzapur, Chunar<br />
          Uttar Pradesh, India - 231305
        </p>
      </div>
      
      <div className="section">
        <h2>📞 Contact Information</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div>
            <h3>📧 Email</h3>
            <p><a href="mailto:contact.curelex@gmail.com">contact.curelex@gmail.com</a></p>
          </div>
          <div>
            <h3>📱 Phone Numbers</h3>
            <p>
              <a href="tel:+918957809085">89578 09085</a><br />
              <a href="tel:+917355395706">73553 95706</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>🌐 Connect With Us</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
          <div>
            <h3>📱 WhatsApp Channel</h3>
            <p>
              <a href="https://whatsapp.com/channel/0029Vb6h5rD90x2oWxVpiF1N" target="_blank" rel="noopener noreferrer">
                Join our WhatsApp Channel
              </a>
            </p>
          </div>
          <div>
            <h3>📺 YouTube</h3>
            <p>
              <a href="https://www.youtube.com/@CurelexOfficial" target="_blank" rel="noopener noreferrer">
                @CurelexOfficial
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>💬 Send us a Message</h2>
        <form style={{maxWidth: '600px'}}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              rows="5" 
              placeholder="How can we help you?"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;