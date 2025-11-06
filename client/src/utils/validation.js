/**
 * Form Validation Utilities
 * Client-side validation helper functions
 */

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

/**
 * Validate required field
 * @param {string} value - Field value
 * @returns {boolean} True if not empty
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate minimum length
 * @param {string} value - Field value
 * @param {number} minLength - Minimum length
 * @returns {boolean} True if meets minimum
 */
export const minLength = (value, minLength) => {
  return value && value.trim().length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Field value
 * @param {number} maxLength - Maximum length
 * @returns {boolean} True if within maximum
 */
export const maxLength = (value, maxLength) => {
  return value && value.trim().length <= maxLength;
};

/**
 * Validate contact form
 * @param {Object} formData - Form data object
 * @returns {Object} Validation errors object
 */
export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  } else if (!minLength(formData.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  } else if (!maxLength(formData.name, 50)) {
    errors.name = 'Name cannot exceed 50 characters';
  }

  // Email validation
  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please provide a valid email address';
  }

  // Subject validation
  if (!isRequired(formData.subject)) {
    errors.subject = 'Subject is required';
  } else if (!maxLength(formData.subject, 100)) {
    errors.subject = 'Subject cannot exceed 100 characters';
  }

  // Message validation
  if (!isRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (!minLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  } else if (!maxLength(formData.message, 1000)) {
    errors.message = 'Message cannot exceed 1000 characters';
  }

  return errors;
};

/**
 * Check if validation errors exist
 * @param {Object} errors - Errors object
 * @returns {boolean} True if there are errors
 */
export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0;
};
