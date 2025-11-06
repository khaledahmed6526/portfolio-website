/**
 * Message Routes
 * Defines all routes for contact form messages
 */

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  getAllMessages,
  getMessageById,
  createMessage,
  markAsRead,
  deleteMessage
} = require('../controllers/messageController');

// Validation rules for message creation
const messageValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address'),
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ max: 100 }).withMessage('Subject cannot exceed 100 characters'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// GET all messages - /api/messages
router.get('/', getAllMessages);

// GET single message - /api/messages/:id
router.get('/:id', getMessageById);

// POST create message (contact form) - /api/messages
router.post('/', messageValidation, createMessage);

// PATCH mark as read - /api/messages/:id/read
router.patch('/:id/read', markAsRead);

// DELETE message - /api/messages/:id
router.delete('/:id', deleteMessage);

module.exports = router;
