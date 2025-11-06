# Professional Full-Stack Portfolio Website

A professional, modern portfolio website built with React, Node.js, Express, and MongoDB. Features a responsive design, service showcase, portfolio section, and contact form with email notifications.

**🌐 Live Demo:** [Coming Soon]

---

## ✨ Features

- 🎨 Modern, responsive UI with TailwindCSS
- 💼 Services showcase (3 professional services)
- 🖼️ Portfolio section to display previous work
- 📧 Contact form with email notifications
- 🔒 Secure backend with MongoDB
- ⚡ Fast and optimized performance

---

## 🚀 Quick Start - Deploy to Production

**📄 Want to deploy this website? Start here:**

1. Open `START_HERE.txt` for a quick overview
2. Follow `QUICK_DEPLOY.md` for step-by-step deployment (10 minutes)
3. Or read `DEPLOYMENT_GUIDE.md` for detailed instructions

---
- **Environment Configuration**: Secure .env setup for sensitive data

## 📁 Project Structure

```
project/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Helper functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   └── index.js          # Server entry point
├── .env                  # Environment variables
├── .gitignore
├── package.json          # Root dependencies
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn

### Step 1: Install Dependencies

```bash
# Install root and client dependencies
npm run install-all
```

### Step 2: Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
NODE_ENV=development
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio_db
```

### Step 3: Start the Application

**Development Mode (Concurrent):**
```bash
npm run dev
```

**Production Mode:**
```bash
# Build frontend
npm run build

# Start server
npm start
```

**Individual Services:**
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

## 📡 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Messages (Contact Form)
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Submit contact form
- `DELETE /api/messages/:id` - Delete message

### Users (Optional)
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## 🎨 Customization Guide

### Changing Colors
Edit `client/src/index.css` and `client/tailwind.config.js` to modify the color scheme.

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.js`
3. Update navigation in `client/src/components/Navbar.js`

### Adding New API Endpoints
1. Create model in `server/models/`
2. Create controller in `server/controllers/`
3. Create route in `server/routes/`
4. Register route in `server/index.js`

### Modifying Components
All reusable components are in `client/src/components/`:
- `Navbar.js` - Navigation bar
- `Footer.js` - Footer section
- `Card.js` - Reusable card component
- `Modal.js` - Modal dialog component

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use environment variables for sensitive data
- Implement authentication for admin routes (optional enhancement)
- Add rate limiting for API endpoints in production

## 📦 Technologies Used

### Frontend
- React 18
- React Router 6
- TailwindCSS 3
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator
- CORS
- dotenv

## 🚢 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'build' folder
```

### Backend (Heroku/Railway/Render)
- Set environment variables in platform settings
- Deploy from root directory
- Ensure MongoDB connection string is configured

## 📝 License

MIT License - Feel free to use this project for your portfolio!

## 🤝 Contributing

This is a portfolio project, but feel free to fork and customize for your needs!

---

**Built with ❤️ for your portfolio**
