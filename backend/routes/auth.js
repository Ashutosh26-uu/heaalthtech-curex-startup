const express = require('express');
const router = express.Router();
const { registerPatient, registerDoctor, loginUser } = require('../controllers/authController');

// @route   POST /api/auth/register/patient
// @desc    Register a new patient
// @access  Public
router.post('/register/patient', registerPatient);

// @route   POST /api/auth/register/doctor
// @desc    Register a new doctor
// @access  Public
router.post('/register/doctor', registerDoctor);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

module.exports = router;