# Curelex Healthcare - SQLite Database Setup

## Prerequisites
- Install Node.js from https://nodejs.org/

## Backend Setup

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:5000
   SQLite database file `curelex.db` will be created automatically

## Frontend Setup

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Start Frontend**
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## Database Structure (SQLite)

### Users Table
- **id**: Primary key (auto-increment)
- **fullName**: User's full name
- **email**: Email address (unique, for doctors)
- **mobile**: Mobile number (unique)
- **password**: Hashed password
- **userType**: 'patient' or 'doctor'
- **receiveOffers**: Boolean (patients only)
- **specialization**: Doctor's specialization
- **experience**: Years of experience (doctors)
- **medicalLicense**: Medical license number (unique, doctors)
- **isVerified**: Account verification status
- **agreeToTerms**: Terms agreement
- **createdAt**: Registration timestamp
- **updatedAt**: Last update timestamp

### API Endpoints
- `POST /api/auth/register/patient` - Register new patient
- `POST /api/auth/register/doctor` - Register new doctor  
- `POST /api/auth/login` - Login user
- `GET /api/health` - Health check

### Security Features
- Password hashing with bcrypt
- JWT token authentication
- Input validation
- Unique constraints on email, mobile, and medical license

## Advantages of SQLite
- ✅ No separate database server required
- ✅ File-based database (curelex.db)
- ✅ Zero configuration
- ✅ Perfect for development and small applications
- ✅ Automatic database creation

## Logo Watermark
- Logo is displayed as watermark background at 6% opacity
- Uses `src/assets/companylogo.jpeg` file
- Centered and sized at 20% of screen width