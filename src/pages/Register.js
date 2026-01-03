import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    password: '',
    agreeToTerms: false,
    receiveOffers: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
    // Add registration logic here
  };

  return (
    <div className="page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>Join Curelex</h2>
          <p>
            Are you a doctor? <Link to="#" className="register-link">Register Here</Link>
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Mobile Number</label>
            <div className="phone-input">
              <select className="country-code">
                <option value="+91">+91(IND)</option>
              </select>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="receiveOffers"
              name="receiveOffers"
              checked={formData.receiveOffers}
              onChange={handleChange}
            />
            <label htmlFor="receiveOffers">
              Receive relevant offers and promotional communication from Curelex
            </label>
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToTerms">
              By signing up, I agree to <Link to="#" className="terms-link">terms</Link>
            </label>
          </div>
          
          <button type="submit" className="submit-btn" disabled={!formData.agreeToTerms}>
            Join Curelex
          </button>
        </form>
        
        <div style={{textAlign: 'center', marginTop: '1rem'}}>
          <p>Already have an account? <Link to="/login" style={{color: '#2c5aa0', textDecoration: 'none'}}>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;