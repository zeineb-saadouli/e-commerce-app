// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Champ du panier avec des références vers les produits
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Référence vers le modèle des produits
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);

