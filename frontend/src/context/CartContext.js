import React, { createContext, useContext, useState } from 'react';

// Créer le CartContext
const CartContext = createContext();

// Hook personnalisé pour utiliser le CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // État du panier
  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Vérifier si le produit existe déjà dans le panier
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si le produit existe, on vérifie si la quantité ne dépasse pas le stock
        if (existingProduct.quantity < product.stock) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } // Incrémenter la quantité si stock disponible
              : item
          );
        } else {
          // Si la quantité dépasse le stock, on affiche un message d'alerte
          alert(`Only ${product.stock} of ${product.name} are available.`);
          return prevCart;
        }
      } else {
        // Si le produit n'existe pas encore dans le panier, on l'ajoute avec une quantité de 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Fonction pour mettre à jour la quantité d'un produit
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(quantity, item.stock) } // S'assurer que la quantité ne dépasse pas le stock
          : item
      )
    );
  };

  // Fonction pour retirer un produit du panier
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Fournir les données et fonctions du panier
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};