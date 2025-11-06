/**
 * Service Routes
 * Defines all routes for service endpoints
 */

const express = require('express');
const router = express.Router();
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} = require('../controllers/serviceController');

// GET all services - /api/services
router.get('/', getAllServices);

// GET single service - /api/services/:id
router.get('/:id', getServiceById);

// POST create service - /api/services
router.post('/', createService);

// PUT update service - /api/services/:id
router.put('/:id', updateService);

// DELETE service - /api/services/:id
router.delete('/:id', deleteService);

module.exports = router;
