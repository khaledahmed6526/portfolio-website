# Deployment Guide

This guide covers deploying your full-stack application to production.

## 📦 Deployment Options

### Frontend Deployment

#### Option 1: Vercel (Recommended)

1. **Build your frontend:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   cd client
   vercel
   ```

3. **Configure environment variables in Vercel dashboard:**
   - `REACT_APP_API_URL` = Your backend URL

#### Option 2: Netlify

1. **Build the project:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy via Netlify CLI or drag & drop the `build` folder**

3. **Add build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `client`

### Backend Deployment

#### Option 1: Render (Recommended - Free Tier)

1. **Push your code to GitHub**

2. **Create new Web Service on Render:**
   - Connect your GitHub repository
   - Root directory: Leave empty (or specify if needed)
   - Build command: `npm install`
   - Start command: `npm start`

3. **Environment variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=10000
   ```

#### Option 2: Railway

1. **Push code to GitHub**

2. **Create new project on Railway:**
   - Connect repository
   - Railway auto-detects Node.js

3. **Add environment variables**

#### Option 3: Heroku

1. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

2. **Set environment variables:**
   ```bash
   heroku config:set MONGODB_URI=your_connection_string
   heroku config:set NODE_ENV=production
   ```

3. **Deploy:**
   ```bash
   git push heroku main
   ```

### Database Deployment

#### MongoDB Atlas (Cloud Database)

1. **Create free account:** https://www.mongodb.com/cloud/atlas

2. **Create new cluster** (Free M0 tier available)

3. **Configure network access:**
   - Add IP: `0.0.0.0/0` (allow from anywhere) for production
   - Or add specific IPs

4. **Create database user:**
   - Username: `your_username`
   - Password: `strong_password`

5. **Get connection string:**
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio_db
   ```

6. **Update environment variables** with this connection string

## 🔒 Security Checklist

Before deploying to production:

- [ ] All sensitive data in environment variables (not hardcoded)
- [ ] `.env` file is in `.gitignore`
- [ ] CORS configured for your frontend domain
- [ ] MongoDB Atlas has proper network access rules
- [ ] Strong database passwords used
- [ ] Rate limiting enabled (add express-rate-limit)
- [ ] Input validation on all endpoints
- [ ] HTTPS enabled on production domains

## 🚀 Production Best Practices

### Backend

1. **Add rate limiting:**
   ```bash
   npm install express-rate-limit
   ```

2. **Add helmet for security:**
   ```bash
   npm install helmet
   ```

3. **Enable compression:**
   ```bash
   npm install compression
   ```

4. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name portfolio-api
   ```

### Frontend

1. **Optimize images** before deployment
2. **Enable service workers** for offline functionality
3. **Configure proper caching headers**
4. **Add Google Analytics** (optional)

## 📊 Monitoring

### Backend Monitoring

- **Render/Railway/Heroku**: Built-in logs and metrics
- **External**: Use services like Sentry, LogRocket, or New Relic

### Frontend Monitoring

- **Google Analytics**: Track page views
- **Sentry**: Error tracking
- **Vercel Analytics**: Built-in performance metrics

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: cd client && npm install
      - run: cd client && npm run build
```

## 🧪 Pre-Deployment Testing

Run these commands before deploying:

```bash
# Test backend
npm run server

# Test frontend build
cd client
npm run build
npm install -g serve
serve -s build

# Test production environment
NODE_ENV=production npm start
```

## 📝 Post-Deployment

After deploying:

1. **Test all functionality:**
   - Navigate through all pages
   - Submit contact form
   - Check API endpoints
   - Test on mobile devices

2. **Set up monitoring alerts**

3. **Create backup strategy for database**

4. **Document your deployment URLs:**
   - Frontend URL: 
   - Backend API URL: 
   - Database: MongoDB Atlas cluster name

## 🆘 Troubleshooting

### Build Fails

- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Review build logs for specific errors

### API Not Connecting

- Verify CORS settings allow your frontend domain
- Check environment variables are set correctly
- Ensure backend URL is correct in frontend

### Database Connection Issues

- Verify MongoDB Atlas network access
- Check connection string format
- Ensure database user has proper permissions

---

**Need help?** Refer to the platform-specific documentation or open an issue on GitHub.
