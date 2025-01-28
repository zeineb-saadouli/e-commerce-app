const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes pour les produits
router.post('/', productController.createProduct); // Créer un produit
router.get('/', productController.getAllProducts); // Obtenir tous les produits
router.get('/:id', productController.getProductById); // Obtenir un produit par ID
router.put('/:id', productController.updateProduct); // Mettre à jour un produit
router.delete('/:id', productController.deleteProduct); // Supprimer un produit

module.exports = router;
