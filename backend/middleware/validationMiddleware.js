// server/middleware/validationMiddleware.js
const Joi = require('joi');

// Validation schema for registering a user
const registerValidationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Middleware to validate the request body based on the schema
const validateRegister = (req, res, next) => {
  const { error } = registerValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next(); // If validation passed, proceed to the next middleware/route
};

module.exports = validateRegister;