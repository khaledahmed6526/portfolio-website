/**
 * Portfolio Routes
 * Routes for portfolio/previous work
 */

const express = require('express');
const router = express.Router();
const {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolioController');

// GET all portfolio - /api/portfolio
router.get('/', getAllPortfolio);

// GET single portfolio - /api/portfolio/:id
router.get('/:id', getPortfolioById);

// POST create portfolio - /api/portfolio
router.post('/', createPortfolio);

// PUT update portfolio - /api/portfolio/:id
router.put('/:id', updatePortfolio);

// DELETE portfolio - /api/portfolio/:id
router.delete('/:id', deletePortfolio);

module.exports = router;
