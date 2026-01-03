const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  userType: {
    type: String,
    enum: ['patient', 'doctor'],
    required: true
  },
  // Patient specific fields
  receiveOffers: {
    type: Boolean,
    default: false
  },
  // Doctor specific fields
  specialization: {
    type: String,
    required: function() { return this.userType === 'doctor'; }
  },
  experience: {
    type: Number,
    required: function() { return this.userType === 'doctor'; }
  },
  medicalLicense: {
    type: String,
    required: function() { return this.userType === 'doctor'; },
    unique: true,
    sparse: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  agreeToTerms: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);