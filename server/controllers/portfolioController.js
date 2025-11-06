/**
 * Portfolio Controller
 * Handle display and management of previous work
 */

const Portfolio = require('../models/Portfolio');

/**
 * Get all portfolio items
 * GET /api/portfolio
 */
exports.getAllPortfolio = async (req, res) => {
  try {
    const { category, isFeatured } = req.query;
    
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';

    const portfolio = await Portfolio.find(filter)
      .sort({ isFeatured: -1, completionDate: -1 });
    
    res.json({
      success: true,
      count: portfolio.length,
      data: portfolio
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Get single portfolio item by ID
 * GET /api/portfolio/:id
 */
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Create new portfolio item
 * POST /api/portfolio
 */
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    
    res.status(201).json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Update portfolio item
 * PUT /api/portfolio/:id
 */
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Delete portfolio item
 * DELETE /api/portfolio/:id
 */
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
