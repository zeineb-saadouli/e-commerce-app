
const productService = require('../services/productServices');

// Ajouter plusieurs produits
const addMultipleProducts = async (req, res) => {
  const products = req.body.products; // Tableau de produits
  try {
    const createdProducts = await productService.addMultipleProducts(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter un produit
const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les produits
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un produit par ID
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un produit
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un produit
const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  addMultipleProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};