/**
 * Message Controller
 * Handles contact form submissions and message management
 */

const Message = require('../models/Message');
const { validationResult } = require('express-validator');
const { sendContactNotification, sendWelcomeEmail } = require('../utils/emailService');

/**
 * Get all messages
 * GET /api/messages
 */
exports.getAllMessages = async (req, res) => {
  try {
    const { isRead } = req.query;
    
    // Build query filter
    const filter = {};
    if (isRead !== undefined) filter.isRead = isRead === 'true';

    const messages = await Message.find(filter).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Get single message by ID
 * GET /api/messages/:id
 */
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Create new message (Contact form submission)
 * POST /api/messages
 */
exports.createMessage = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const message = await Message.create(req.body);
    
    // Send email notification to you
    sendContactNotification({
      name: message.name,
      email: message.email,
      subject: message.subject,
      message: message.message
    }).then(result => {
      if (result.success) {
        console.log('✅ Email sent successfully');
      } else {
        console.log('⚠️ Email was not sent:', result.error);
      }
    });

    // (Optional) Send welcome email to client
    sendWelcomeEmail({
      name: message.name,
      email: message.email
    }).catch(err => {
      console.log('⚠️ Failed to send welcome email:', err.message);
    });
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will contact you soon.',
      data: message
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Mark message as read
 * PATCH /api/messages/:id/read
 */
exports.markAsRead = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Delete message
 * DELETE /api/messages/:id
 */
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    res.json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
