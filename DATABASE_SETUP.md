# Curelex Healthcare - Database Setup

## Prerequisites
1. Install MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install Node.js from https://nodejs.org/

## Backend Setup

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Start MongoDB Service**
   - Windows: MongoDB should start automatically after installation
   - Or manually start: `mongod`

3. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:5000

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

## Database Structure

### Users Collection
- **Patient Registration**: fullName, mobile, password, receiveOffers, agreeToTerms
- **Doctor Registration**: fullName, email, mobile, specialization, experience, medicalLicense, password, agreeToTerms
- **Login**: emailOrPhone (email or mobile), password

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

## Logo Watermark
- Logo is displayed as watermark background at 6% opacity
- Uses `/public/logo.jpeg` file
- Centered and sized at 20% of screen width