const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'curelex_secret_key', {
    expiresIn: '30d'
  });
};

// Register Patient
const registerPatient = async (req, res) => {
  try {
    const { fullName, mobile, password, agreeToTerms, receiveOffers } = req.body;

    // Check if user already exists
    db.checkUserExists(null, mobile, null, async (err, existingUser) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err.message });
      }
      
      if (existingUser) {
        return res.status(400).json({ message: 'User with this mobile number already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new patient
      const userData = {
        fullName,
        mobile,
        password: hashedPassword,
        agreeToTerms,
        receiveOffers
      };

      db.createPatient(userData, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating patient', error: err.message });
        }

        // Generate token
        const token = generateToken(user.id);

        res.status(201).json({
          message: 'Patient registered successfully',
          token,
          user
        });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Register Doctor
const registerDoctor = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      mobile, 
      specialization, 
      experience, 
      medicalLicense, 
      password, 
      agreeToTerms 
    } = req.body;

    // Check if doctor already exists
    db.checkUserExists(email, mobile, medicalLicense, async (err, existingUser) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err.message });
      }
      
      if (existingUser) {
        return res.status(400).json({ 
          message: 'Doctor with this email, mobile, or license already exists' 
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new doctor
      const userData = {
        fullName,
        email,
        mobile,
        specialization,
        experience,
        medicalLicense,
        password: hashedPassword,
        agreeToTerms
      };

      db.createDoctor(userData, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating doctor', error: err.message });
        }

        // Generate token
        const token = generateToken(user.id);

        res.status(201).json({
          message: 'Doctor registered successfully',
          token,
          user
        });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    // Find user by email or mobile
    db.findUser(emailOrPhone, async (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err.message });
      }
      
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate token
      const token = generateToken(user.id);

      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          mobile: user.mobile,
          userType: user.userType,
          specialization: user.specialization
        }
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  registerPatient,
  registerDoctor,
  loginUser
};