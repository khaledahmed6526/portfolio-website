/**
 * User Routes
 * Defines all routes for user endpoints
 */

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// GET all users - /api/users
router.get('/', getAllUsers);

// GET single user - /api/users/:id
router.get('/:id', getUserById);

// POST create user - /api/users
router.post('/', createUser);

// PUT update user - /api/users/:id
router.put('/:id', updateUser);

// DELETE user - /api/users/:id
router.delete('/:id', deleteUser);

module.exports = router;
