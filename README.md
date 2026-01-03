# Curelex Healthcare Website

A modern React.js website for Curelex - Next-generation hybrid e-clinic model for rural healthcare.

## Features

- ✅ Modern React.js with React Router for navigation
- ✅ Responsive design for all devices
- ✅ Logo in navbar and watermark background
- ✅ Complete routing system (Home, About, Services, Contact, Login, Register)
- ✅ Professional styling with CSS
- ✅ Contact information and social media links
- ✅ Registration form similar to the provided design

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Logo**
   - Add your logo as `public/logo.png` (for navbar)
   - Add your logo as `src/assets/logo.png` (for watermark)
   - See LOGO_INSTRUCTIONS.md for details

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Pages

- **Home** (`/`) - Landing page with hero section and services overview
- **About** (`/about`) - Complete company description and mission
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and company information
- **Login** (`/login`) - User login form
- **Register** (`/register`) - User registration form (Join Curelex)

## Tech Stack

- React.js 18
- React Router DOM 6
- CSS3 with modern styling
- Responsive design
- Font Awesome icons (via emoji)

## Company Information

**Curelex Healthcare**
- Address: C/O SHIV KUMARI DEVI, MUHMMADPUR PACHEWARA, Pachevara, Mirzapur, Chunar, Uttar Pradesh, India, 231305
- Email: contact.curelex@gmail.com
- Phone: 89578 09085 / 73553 95706
- WhatsApp: https://whatsapp.com/channel/0029Vb6h5rD90x2oWxVpiF1N
- YouTube: https://www.youtube.com/@CurelexOfficial

## Customization

The website is fully customizable. You can:
- Update colors in `src/App.css`
- Modify content in page components
- Add new pages by creating components and adding routes
- Update company information in Footer component

## Deployment

This website can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Run `npm run build` to create production files in the `build` folder.