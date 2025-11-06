/**
 * API Utility
 * Centralized API calls using Axios
 * Handles all backend communication
 */

import axios from 'axios';

// Base API URL - use environment variable for production, proxy for development
const API_URL = process.env.REACT_APP_API_URL || '/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (can add auth tokens here)
api.interceptors.request.use(
  (config) => {
    // Add authentication token if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// ============= SERVICE API CALLS =============

/**
 * Get all services
 * @param {Object} params - Query parameters (category, isActive)
 * @returns {Promise} Array of services
 */
export const getServices = async (params = {}) => {
  const response = await api.get('/services', { params });
  return response.data;
};

/**
 * Get single service by ID
 * @param {string} id - Service ID
 * @returns {Promise} Service object
 */
export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

/**
 * Create new service
 * @param {Object} serviceData - Service data
 * @returns {Promise} Created service
 */
export const createService = async (serviceData) => {
  const response = await api.post('/services', serviceData);
  return response.data;
};

// ============= MESSAGE API CALLS =============

/**
 * Get all messages
 * @param {Object} params - Query parameters (isRead)
 * @returns {Promise} Array of messages
 */
export const getMessages = async (params = {}) => {
  const response = await api.get('/messages', { params });
  return response.data;
};

/**
 * Submit contact form (create message)
 * @param {Object} messageData - Message data (name, email, subject, message)
 * @returns {Promise} Created message
 */
export const submitContactForm = async (messageData) => {
  const response = await api.post('/messages', messageData);
  return response.data;
};

/**
 * Mark message as read
 * @param {string} id - Message ID
 * @returns {Promise} Updated message
 */
export const markMessageAsRead = async (id) => {
  const response = await api.patch(`/messages/${id}/read`);
  return response.data;
};

// ============= USER API CALLS =============

/**
 * Get all users
 * @param {Object} params - Query parameters (role, isActive)
 * @returns {Promise} Array of users
 */
export const getUsers = async (params = {}) => {
  const response = await api.get('/users', { params });
  return response.data;
};

/**
 * Get single user by ID
 * @param {string} id - User ID
 * @returns {Promise} User object
 */
export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

/**
 * Create new user
 * @param {Object} userData - User data
 * @returns {Promise} Created user
 */
export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

// ============= PORTFOLIO API CALLS =============

/**
 * Get all portfolio items
 * @param {Object} params - Query parameters (category, isFeatured, isActive)
 * @returns {Promise} Array of portfolio items
 */
export const getPortfolio = async (params = {}) => {
  const response = await api.get('/portfolio', { params });
  return response.data;
};

/**
 * Get single portfolio item by ID
 * @param {string} id - Portfolio ID
 * @returns {Promise} Portfolio object
 */
export const getPortfolioById = async (id) => {
  const response = await api.get(`/portfolio/${id}`);
  return response.data;
};

/**
 * Create new portfolio item
 * @param {Object} portfolioData - Portfolio data
 * @returns {Promise} Created portfolio
 */
export const createPortfolio = async (portfolioData) => {
  const response = await api.post('/portfolio', portfolioData);
  return response.data;
};

export default api;
