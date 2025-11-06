/**
 * Database Seeder
 * Populates the database with sample data for testing
 * Run: node server/seedData.js
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const User = require('./models/User');
const Portfolio = require('./models/Portfolio');

// Load environment variables
dotenv.config();

// Sample Services Data - My Available Services
const services = [
  {
    title: 'Website Design & Development',
    description: 'I design and develop your website according to your specific needs. Whether you need a personal website, company website, e-commerce store, or any other type of website.',
    icon: '🌐',
    price: 'Custom pricing - Starting at $300',
    category: 'web-development',
    features: [
      'Professional & Modern Design',
      'Responsive on All Devices (Mobile, Tablet, Desktop)',
      'Fast Loading Speed',
      'SEO Optimized',
      'Easy-to-Use Admin Panel',
      'Social Media Integration',
      'Contact Forms & Interaction',
      'High Security & Protection'
    ]
  },
  {
    title: 'Website Hosting Services',
    description: 'I provide hosting services for your website on fast and secure servers. I handle all technical aspects to ensure your site runs efficiently 24/7.',
    icon: '🚀',
    price: 'Starting at $50/month',
    category: 'web-development',
    features: [
      'Fast & Secure Servers',
      'Daily Backups',
      'Free SSL Certificate (HTTPS)',
      'Continuous Technical Support',
      'Professional Email Service',
      'cPanel Control Panel',
      'Adequate Storage Space',
      'Free Domain (Depending on Package)'
    ]
  },
  {
    title: 'Website Maintenance & Support',
    description: 'Regular maintenance service for your website to ensure optimal performance. I handle updates, bug fixes, content additions, and continuous monitoring.',
    icon: '🔧',
    price: 'Starting at $30/month',
    category: 'consulting',
    features: [
      'Regular Security Updates',
      'Fix Any Technical Issues',
      'Add New Content & Pages',
      'Update Design & Content',
      'Website Performance Monitoring',
      'Monthly Reports',
      'Regular Backups',
      'Continuous Consultation & Guidance'
    ]
  }
];

// Sample Users Data
const users = [
  {
    name: 'Khaled Ahmed',
    email: 'akhaledahmedmahamed@gmail.com',
    role: 'admin',
    bio: 'Full-stack web developer specializing in website design and development',
    avatar: 'https://i.pravatar.cc/150?img=1'
  }
];

// Sample Portfolio Data - Previous Work Examples
const portfolio = [
  {
    title: 'Business Company Website',
    description: 'Design and development of a professional website for a trading company specializing in import and export. The site includes service showcase, image gallery, contact form, and social media integration.',
    category: 'website',
    technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
    ],
    projectUrl: 'https://example-company.com',
    client: 'International Trade Company',
    completionDate: new Date('2024-10-15'),
    isFeatured: true,
    isActive: true
  },
  {
    title: 'Fashion E-Commerce Store',
    description: 'Development of a complete e-commerce store for online clothing sales. Includes shopping cart system, secure payment gateway, admin dashboard, and order tracking.',
    category: 'ecommerce',
    technologies: ['React', 'Express', 'MongoDB', 'Stripe', 'TailwindCSS'],
    images: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800'
    ],
    projectUrl: 'https://example-store.com',
    client: 'Elegance Store',
    completionDate: new Date('2024-09-20'),
    isFeatured: true,
    isActive: true
  },
  {
    title: 'Photographer Portfolio Website',
    description: 'Professional portfolio website to showcase photographer work. Features interactive image gallery, about page, services, and booking form.',
    category: 'website',
    technologies: ['React', 'Node.js', 'TailwindCSS'],
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800'
    ],
    projectUrl: 'https://photographer-portfolio.com',
    client: 'Ahmed Photography',
    completionDate: new Date('2024-08-10'),
    isFeatured: false,
    isActive: true
  },
  {
    title: 'Medical Appointment Booking System',
    description: 'Web application for booking medical appointments at clinics. Includes appointment management system, automatic notifications, and Google Calendar integration.',
    category: 'web-app',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
    ],
    projectUrl: 'https://medical-booking.com',
    client: 'Al Noor Medical Clinic',
    completionDate: new Date('2024-07-05'),
    isFeatured: true,
    isActive: true
  }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db';
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await User.deleteMany({});
    await Portfolio.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample data
    await Service.insertMany(services);
    await User.insertMany(users);
    await Portfolio.insertMany(portfolio);

    console.log('✅ Sample data inserted successfully!');
    console.log(`   - ${services.length} services created`);
    console.log(`   - ${users.length} users created`);
    console.log(`   - ${portfolio.length} portfolio items created`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seeder
seedDatabase();
