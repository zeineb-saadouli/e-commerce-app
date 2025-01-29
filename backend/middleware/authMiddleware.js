// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Auth middleware to check JWT token validity
const checkAuthentication = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save decoded user data to request
    next(); // Allow the request to proceed to the next middleware/route handler
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = checkAuthentication;