/**
 * Simple utility module for calculations and formatting.
 */

/**
 * Adds two numbers together.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Formats a message response.
 * @param {string} text 
 * @returns {string} Formatted uppercase string
 */
function formatMessage(text) {
  if (!text) return '';
  return text.trim().toUpperCase();
}

/**
 * Checks if a string is a valid email address (very simple pattern check).
 * @param {string} email 
 * @returns {boolean} True if matches email pattern
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

module.exports = {
  sum,
  formatMessage,
  isValidEmail
};
