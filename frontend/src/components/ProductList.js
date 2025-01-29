import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import { useCart } from '../context/CartContext';  // Importez 'useCart' au lieu de 'CartContext'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();  // Utilisez 'useCart' pour accéder aux fonctions du panier

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Erreur lors du chargement des produits');
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  if (loading) return <p>Chargement des produits...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Liste des produits</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Prix : {product.price}€</p>
            <button onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;