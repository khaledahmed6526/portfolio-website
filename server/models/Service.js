/**
 * Service Model
 * Represents a service or product offered
 * Used for the Services/Products page
 */

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  icon: {
    type: String,
    default: '🎯' // Emoji or icon class name (e.g., 'fas fa-code')
  },
  price: {
    type: String,
    default: 'Contact for pricing'
  },
  features: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    enum: ['web-development', 'mobile-app', 'design', 'consulting', 'other'],
    default: 'other'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Index for faster queries
serviceSchema.index({ category: 1, isActive: 1 });

module.exports = mongoose.model('Service', serviceSchema);
