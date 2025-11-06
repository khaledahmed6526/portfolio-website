/**
 * Database Configuration
 * Handles MongoDB connection using Mongoose
 * Supports both local MongoDB and MongoDB Atlas
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Get connection string from environment variables
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db';

    // Connect to MongoDB
    const conn = await mongoose.connect(MONGODB_URI, options);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📚 Database: ${conn.connection.name}`);

  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    
    // If MongoDB is not running locally, provide helpful message
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n⚠️  Make sure MongoDB is running:');
      console.log('   - Start local MongoDB: mongod');
      console.log('   - Or use MongoDB Atlas cloud database\n');
    }
    
    // Exit process with failure
    process.exit(1);
  }
};

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB error:', err);
});

module.exports = connectDB;
