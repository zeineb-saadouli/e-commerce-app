import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Panier</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Prix : {item.price}€</p>
                <p>Quantity : {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;