const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'curelex.db');

class Database {
  constructor() {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('Connected to SQLite database');
        this.initTables();
      }
    });
  }

  initTables() {
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT NOT NULL,
        email TEXT UNIQUE,
        mobile TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        userType TEXT NOT NULL CHECK(userType IN ('patient', 'doctor')),
        receiveOffers BOOLEAN DEFAULT 0,
        specialization TEXT,
        experience INTEGER,
        medicalLicense TEXT UNIQUE,
        isVerified BOOLEAN DEFAULT 0,
        agreeToTerms BOOLEAN NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    this.db.run(createUsersTable, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table ready');
      }
    });
  }

  // Patient registration
  createPatient(userData, callback) {
    const { fullName, mobile, password, agreeToTerms, receiveOffers } = userData;
    const sql = `
      INSERT INTO users (fullName, mobile, password, userType, agreeToTerms, receiveOffers)
      VALUES (?, ?, ?, 'patient', ?, ?)
    `;
    
    this.db.run(sql, [fullName, mobile, password, agreeToTerms, receiveOffers || 0], function(err) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { id: this.lastID, fullName, mobile, userType: 'patient' });
      }
    });
  }

  // Doctor registration
  createDoctor(userData, callback) {
    const { fullName, email, mobile, specialization, experience, medicalLicense, password, agreeToTerms } = userData;
    const sql = `
      INSERT INTO users (fullName, email, mobile, password, userType, specialization, experience, medicalLicense, agreeToTerms)
      VALUES (?, ?, ?, ?, 'doctor', ?, ?, ?, ?)
    `;
    
    this.db.run(sql, [fullName, email, mobile, password, specialization, experience, medicalLicense, agreeToTerms], function(err) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { 
          id: this.lastID, 
          fullName, 
          email, 
          mobile, 
          userType: 'doctor', 
          specialization, 
          experience 
        });
      }
    });
  }

  // Find user by email or mobile
  findUser(emailOrPhone, callback) {
    const sql = `SELECT * FROM users WHERE email = ? OR mobile = ?`;
    
    this.db.get(sql, [emailOrPhone, emailOrPhone], (err, row) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }

  // Check if user exists
  checkUserExists(email, mobile, medicalLicense, callback) {
    let sql = `SELECT * FROM users WHERE mobile = ?`;
    let params = [mobile];
    
    if (email) {
      sql += ` OR email = ?`;
      params.push(email);
    }
    
    if (medicalLicense) {
      sql += ` OR medicalLicense = ?`;
      params.push(medicalLicense);
    }
    
    this.db.get(sql, params, (err, row) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

module.exports = new Database();