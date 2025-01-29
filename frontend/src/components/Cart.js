import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import du fichier CSS

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price =
          typeof item.price === "string"
            ? parseFloat(item.price.replace("DT", "").trim())
            : item.price;

        return total + (isNaN(price) ? 0 : price * item.quantity);
      }, 0)
      .toFixed(2); // Arrondir le total à deux décimales
  };

  const handleIncrement = (product) => {
    if (product.quantity < product.stock) {
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="container my-5 cart-container">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-image"
                  />
                  <h5 className="cart-item-name">{product.name}</h5>
                </div>
                <div className="cart-item-buttons">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleDecrement(product)}
                  >
                    -
                  </button>
                  <span className="mx-2 cart-item-quantity">
                    {product.quantity}
                  </span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleIncrement(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary text-center">
            <h3 className="text-success">Total: {calculateTotal()} €</h3>
            <div className="d-flex justify-content-center">
              <Link to="/checkout">
                <button className="btn btn-primary px-4 py-2 mt-3">
                  Proceed to Checkout
                </button>
              </Link>
              <button
                className="btn btn-danger btn-sm mt-3 mx-3"
                onClick={() => removeFromCart()}
              >
                Remove
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;