/**
 * Portfolio Model
 * Display previous work and projects
 */

const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    enum: ['website', 'web-app', 'ecommerce', 'mobile-app', 'design', 'other'],
    default: 'website'
  },
  technologies: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String, // URL للصورة
    trim: true
  }],
  projectUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  client: {
    type: String,
    trim: true,
    maxlength: [100, 'Client name cannot exceed 100 characters']
  },
  completionDate: {
    type: Date,
    default: Date.now
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
portfolioSchema.index({ category: 1, isFeatured: -1, completionDate: -1 });

module.exports = mongoose.model('Portfolio', portfolioSchema);
