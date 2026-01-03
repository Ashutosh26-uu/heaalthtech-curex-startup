import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with Curelex for healthcare solutions</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Our Address</h3>
              <p>
                <strong>Curelex Healthcare</strong><br />
                C/O SHIV KUMARI DEVI<br />
                MUHMMADPUR PACHEWARA<br />
                Pachevara, Mirzapur, Chunar<br />
                Uttar Pradesh, India - 231305
              </p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contact.curelex@gmail.com">contact.curelex@gmail.com</a>
              </p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone Numbers</h3>
              <p>
                <a href="tel:+918957809085">89578 09085</a><br />
                <a href="tel:+917355395706">73553 95706</a>
              </p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Connect With Us</h3>
              <p>
                <a href="https://whatsapp.com/channel/0029Vb6h5rD90x2oWxVpiF1N" target="_blank" rel="noopener noreferrer">
                  WhatsApp Channel
                </a><br />
                <a href="https://www.youtube.com/@CurelexOfficial" target="_blank" rel="noopener noreferrer">
                  YouTube: @CurelexOfficial
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select required>
                  <option value="">Select a subject</option>
                  <option value="consultation">Book Consultation</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;