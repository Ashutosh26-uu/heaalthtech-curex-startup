import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [userType, setUserType] = useState('patient'); // 'patient' or 'doctor'
  const [loginData, setLoginData] = useState({ emailOrPhone: '', password: '' });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    mobile: '',
    password: '',
    agreeToTerms: false,
    receiveOffers: false
  });
  const [doctorData, setDoctorData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    specialization: '',
    experience: '',
    medicalLicense: '',
    password: '',
    agreeToTerms: false
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleDoctorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        console.log('Login successful:', data);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Registration successful!');
        console.log('Registration successful:', data);
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleDoctorSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Doctor registration successful!');
        console.log('Doctor registration successful:', data);
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Doctor registration error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Curelex Healthcare</h1>
            <h2>Telemedicine that feels like offline care</h2>
            <p>
              Next-generation hybrid e-clinic model bringing super-speciality healthcare,
              telemedicine, diagnostics, pathology, and pharmacy support to rural and
              semi-urban communities.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>1</h3>
                <p>E-Clinics</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Specialists</p>
              </div>
              <div className="stat-item">
                <h3>10</h3>
                <p>Patients Served</p>
              </div>
            </div>
          </div>

          <div className="auth-section">
            <div className="auth-tabs">
              <button
                className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {activeTab === 'login' && (
              <div className="auth-form">
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label>Mobile Number / Email</label>
                    <input
                      type="text"
                      name="emailOrPhone"
                      placeholder="Enter mobile number or email"
                      value={loginData.emailOrPhone}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <button type="submit" className="auth-submit-btn">
                    Login
                  </button>
                  <div className="auth-links">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'register' && (
              <div className="auth-form">
                {userType === 'patient' ? (
                  <>
                    <div className="auth-header">
                      <h3>Join Curelex</h3>
                      <p>Are you a doctor? <button type="button" className="doctor-link" onClick={() => setUserType('doctor')}>Register Here</button></p>
                    </div>

                    <form onSubmit={handleRegisterSubmit}>
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          value={registerData.fullName}
                          onChange={handleRegisterChange}
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
                            value={registerData.mobile}
                            onChange={handleRegisterChange}
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
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>

                      <div className="checkbox-group">
                        <input
                          type="checkbox"
                          id="receiveOffers"
                          name="receiveOffers"
                          checked={registerData.receiveOffers}
                          onChange={handleRegisterChange}
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
                          checked={registerData.agreeToTerms}
                          onChange={handleRegisterChange}
                          required
                        />
                        <label htmlFor="agreeToTerms">
                          By signing up, I agree to <a href="#" className="terms-link">terms</a>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={!registerData.agreeToTerms}
                      >
                        Join Curelex
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="auth-header">
                      <h3>Doctor Registration</h3>
                      <p>Are you a patient? <button type="button" className="doctor-link" onClick={() => setUserType('patient')}>Register Here</button></p>
                    </div>

                    <form onSubmit={handleDoctorSubmit}>
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Dr. Full Name"
                          value={doctorData.fullName}
                          onChange={handleDoctorChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="doctor@example.com"
                          value={doctorData.email}
                          onChange={handleDoctorChange}
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
                            value={doctorData.mobile}
                            onChange={handleDoctorChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Specialization</label>
                        <select
                          name="specialization"
                          value={doctorData.specialization}
                          onChange={handleDoctorChange}
                          required
                        >
                          <option value="">Select Specialization</option>
                          <option value="general">General Medicine</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="dermatology">Dermatology</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="orthopedics">Orthopedics</option>
                          <option value="gynecology">Gynecology</option>
                          <option value="neurology">Neurology</option>
                          <option value="psychiatry">Psychiatry</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Experience (Years)</label>
                        <input
                          type="number"
                          name="experience"
                          placeholder="Years of experience"
                          value={doctorData.experience}
                          onChange={handleDoctorChange}
                          min="0"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Medical License Number</label>
                        <input
                          type="text"
                          name="medicalLicense"
                          placeholder="Medical License Number"
                          value={doctorData.medicalLicense}
                          onChange={handleDoctorChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Create Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={doctorData.password}
                          onChange={handleDoctorChange}
                          required
                        />
                      </div>

                      <div className="checkbox-group">
                        <input
                          type="checkbox"
                          id="doctorAgreeToTerms"
                          name="agreeToTerms"
                          checked={doctorData.agreeToTerms}
                          onChange={handleDoctorChange}
                          required
                        />
                        <label htmlFor="doctorAgreeToTerms">
                          I agree to the <a href="#" className="terms-link">terms and conditions</a> and confirm that all information provided is accurate
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={!doctorData.agreeToTerms}
                      >
                        Register as Doctor
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;