# Customization Guide

This guide shows you how to customize the portfolio website for your needs.

## 🎨 Styling & Branding

### Change Color Scheme

Edit `client/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Change these hex values to your brand colors
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Main brand color
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
    },
  },
}
```

### Change Fonts

1. **Add font in `client/public/index.html`:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. **Update `client/tailwind.config.js`:**
   ```javascript
   fontFamily: {
     sans: ['Poppins', 'system-ui', 'sans-serif'],
   },
   ```

### Custom Button Styles

Edit `client/src/index.css` to modify button classes:

```css
.btn-primary {
  @apply bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full;
}
```

## 📝 Content Updates

### Update Company Information

**Footer (`client/src/components/Footer.js`):**
- Company name and description
- Contact details (email, phone, address)
- Social media links

**About Page (`client/src/pages/About.js`):**
- Mission statement
- Team members
- Company values
- Statistics

### Modify Navigation Links

Edit `client/src/components/Navbar.js`:

```javascript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },  // Add new link
  { path: '/contact', label: 'Contact' },
];
```

### Update Hero Section

Edit `client/src/pages/Home.js`:

```javascript
<h1 className="text-4xl md:text-6xl font-bold mb-6">
  Your Custom Headline Here
</h1>
<p className="text-xl md:text-2xl mb-8">
  Your custom tagline or description
</p>
```

## 🔧 Adding New Features

### Add a New Page

1. **Create page component:**
   ```bash
   # Create client/src/pages/Portfolio.js
   ```

2. **Add route in `client/src/App.js`:**
   ```javascript
   import Portfolio from './pages/Portfolio';
   
   <Route path="/portfolio" element={<Portfolio />} />
   ```

3. **Add to navigation** (see above)

### Add New Service Category

1. **Update backend model** (`server/models/Service.js`):
   ```javascript
   category: {
     type: String,
     enum: ['web-development', 'mobile-app', 'design', 'consulting', 'blockchain', 'other'],
   }
   ```

2. **Services will automatically appear** in the filter on Services page

### Add Authentication (Future Enhancement)

To add user authentication:

1. **Install packages:**
   ```bash
   npm install jsonwebtoken bcryptjs
   ```

2. **Create auth middleware** in `server/middleware/auth.js`

3. **Add login/register routes**

4. **Protect routes** that need authentication

## 🗄️ Database Customization

### Add New Field to Services

1. **Update model** (`server/models/Service.js`):
   ```javascript
   duration: {
     type: String,
     default: '2-4 weeks'
   },
   ```

2. **Frontend automatically receives** new fields via API

### Modify Contact Form Fields

1. **Update backend model** (`server/models/Message.js`)

2. **Update frontend form** (`client/src/pages/Contact.js`)

3. **Update validation** (`client/src/utils/validation.js`)

## 🎭 Component Customization

### Card Component Variants

Create different card styles in `client/src/components/Card.js`:

```javascript
// Add variant prop
const Card = ({ variant = 'default', ... }) => {
  const variants = {
    default: 'card p-6',
    minimal: 'border border-gray-200 rounded-lg p-4',
    bold: 'bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl p-8'
  };
  
  return (
    <div className={variants[variant]}>
      {/* content */}
    </div>
  );
};
```

### Modal Sizes

Modal component already supports sizes: `sm`, `md`, `lg`, `xl`

```javascript
<Modal isOpen={true} size="lg" title="Large Modal">
  Content here
</Modal>
```

## 📱 Responsive Customization

### Adjust Breakpoints

Edit `client/tailwind.config.js`:

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

### Mobile Menu Behavior

Customize in `client/src/components/Navbar.js`:
- Animation duration
- Menu position
- Overlay behavior

## 🖼️ Images & Assets

### Add Logo

1. **Place logo in** `client/public/logo.png`

2. **Update Navbar:**
   ```javascript
   <img src="/logo.png" alt="Logo" className="h-8" />
   ```

### Background Images

Add to page components:

```javascript
<section 
  className="py-20 bg-cover bg-center"
  style={{ backgroundImage: 'url("/background.jpg")' }}
>
```

## 📊 Analytics Integration

### Google Analytics

1. **Add to `client/public/index.html`:**
   ```html
   <!-- Global site tag (gtag.js) - Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🔌 API Integration

### Add Third-Party API

Example: Add email service (SendGrid, Mailgun):

1. **Install package:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Configure in backend:**
   ```javascript
   // server/utils/email.js
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   ```

3. **Use in message controller** to send emails

## 🎯 SEO Optimization

### Meta Tags

Update `client/public/index.html`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="web development, portfolio, services">
<meta property="og:title" content="Your Portfolio">
<meta property="og:description" content="Description">
<meta property="og:image" content="%PUBLIC_URL%/og-image.jpg">
```

### React Helmet (Advanced)

Install for dynamic meta tags:
```bash
cd client
npm install react-helmet-async
```

## 💾 Data Management

### Seed Custom Data

Edit `server/seedData.js` with your services:

```javascript
const services = [
  {
    title: 'Your Service',
    description: 'Your description',
    icon: '🎯',
    price: '$999',
    category: 'web-development',
    features: ['Feature 1', 'Feature 2']
  },
  // Add more...
];
```

Run: `node server/seedData.js`

## 🔍 Testing Your Changes

After making changes:

1. **Restart development server**
2. **Clear browser cache** (Ctrl+Shift+R / Cmd+Shift+R)
3. **Check console** for errors
4. **Test on mobile** view (browser DevTools)

## 📚 Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express Documentation](https://expressjs.com)

---

**Happy Customizing! 🎨**
