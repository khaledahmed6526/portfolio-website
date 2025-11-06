# Quick Start Guide

Get your full-stack portfolio website up and running in minutes!

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Choose one option:
  - **Local MongoDB**: [Download here](https://www.mongodb.com/try/download/community)
  - **MongoDB Atlas** (Cloud): [Create free account](https://www.mongodb.com/cloud/atlas)

## 🚀 Installation Steps

### Step 1: Install Dependencies

Open your terminal in the project root directory and run:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

Or use the quick command:
```bash
npm run install-all
```

### Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   # Windows
   copy .env.example .env

   # Mac/Linux
   cp .env.example .env
   ```

2. Open `.env` and configure your settings:

**For Local MongoDB:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio_db
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/portfolio_db
```

### Step 3: Start MongoDB (if using local)

**Windows:**
```bash
mongod
```

**Mac (with Homebrew):**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Step 4: Seed Sample Data (Optional but Recommended)

Populate the database with sample services and users:

```bash
node server/seedData.js
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing data
✅ Sample data inserted successfully!
   - 6 services created
   - 2 users created
```

### Step 5: Start the Application

Choose your preferred method:

**Option A: Development Mode (Concurrent - Recommended)**
Runs both backend and frontend simultaneously:
```bash
npm run dev
```

**Option B: Separate Terminals**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

**Option C: Production Mode**
```bash
# Build frontend
npm run build

# Start backend (serves built frontend)
npm start
```

## 🌐 Access Your Application

Once running, open your browser:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **API Health Check**: http://localhost:5000/api/health

## 🎉 You're All Set!

Your application should now be running. Explore the different pages:
- **Home** - Landing page with features
- **About** - Company information and team
- **Services** - Browse available services (loaded from database)
- **Contact** - Send messages via the contact form

## 🔧 Common Issues & Solutions

### Issue: MongoDB Connection Error

**Error:** `ECONNREFUSED 127.0.0.1:27017`

**Solution:**
- Make sure MongoDB is running: `mongod`
- Or use MongoDB Atlas cloud database instead
- Check your `MONGODB_URI` in `.env`

### Issue: Port Already in Use

**Error:** `Port 5000 is already in use`

**Solution:**
- Change the port in `.env`: `PORT=5001`
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F

  # Mac/Linux
  lsof -ti:5000 | xargs kill
  ```

### Issue: Module Not Found

**Error:** `Cannot find module 'express'`

**Solution:**
- Run `npm install` in the root directory
- Run `npm install` in the client directory

### Issue: Frontend Not Loading

**Solution:**
- Check if backend is running on http://localhost:5000
- Check browser console for errors
- Clear browser cache and reload

## 📚 Next Steps

Now that your app is running, you can:

1. **Customize the Content**
   - Edit services in MongoDB or via API
   - Update text in page components
   - Change colors in `client/tailwind.config.js`

2. **Add Your Information**
   - Update company details in Footer
   - Modify About page team members
   - Add your contact information

3. **Deploy to Production**
   - Frontend: Vercel, Netlify, or GitHub Pages
   - Backend: Heroku, Railway, or Render
   - Database: MongoDB Atlas (cloud)

## 🆘 Need Help?

Check the main README.md for:
- Detailed API documentation
- Customization guide
- Deployment instructions
- Project structure overview

---

**Happy Coding! 🚀**
