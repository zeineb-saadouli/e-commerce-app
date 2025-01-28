// services/productService.js
const Product = require('../models/Product');

// Création d'un produit
const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error('Erreur lors de la création du produit');
  }
};

// Récupérer tous les produits
const getAllProducts = async () => {
  try {
    return await Product.find(); // Récupère tous les produits
  } catch (error) {
    throw new Error('Erreur lors de la récupération des produits');
  }
};

// Récupérer un produit par ID
const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) throw new Error('Produit introuvable');
    return product;
  } catch (error) {
    throw new Error('Erreur lors de la récupération du produit');
  }
};

// Mettre à jour un produit
const updateProduct = async (id, productData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (!updatedProduct) throw new Error('Produit introuvable');
    return updatedProduct;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du produit');
  }
};

// Supprimer un produit
const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) throw new Error('Produit introuvable');
    return deletedProduct;
  } catch (error) {
    throw new Error('Erreur lors de la suppression du produit');
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};