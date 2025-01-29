import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"; // Import du fichier CSS

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Calcul du prix total
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Calcul du stock total
  const totalStock = cart.reduce((total, product) => total + product.stock, 0);

  // Gérer l'incrémentation de la quantité
  const handleIncrement = (product) => {
    if (product.quantity < product.stock) {
      updateQuantity(product.id, product.quantity + 1);
    }
  };

  // Gérer la décrémentation de la quantité
  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  // Gérer le passage au paiement
  const handleProceedToPayment = () => {
    navigate("/payment"); // Redirige vers la page de paiement
  };

  return (
    <div className=" container checkout-page  mt-5">
      <h2 className="text-center checkout-title">Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message text-danger">
          Your cart is empty. Please add some items to your cart before
          proceeding to checkout.
        </p>
      ) : (
        <ul className="list-group checkout-list">
          {cart.map((product) => (
         <li key={product.id} className="list-group-item d-flex flex-column align-items-center">
         <img
           src={product.image}
           alt={product.name}
           className="checkout-item-image mb-3"
         />
         <div className="d-flex align-items-center mb-3">
           <button
             className="btn btn-outline-secondary btn-sm"
             onClick={() => handleDecrement(product)}
           >
             -
           </button>
           <span className="mx-2">{product.quantity}</span>
           <button
             className="btn btn-outline-primary btn-sm"
             onClick={() => handleIncrement(product)}
           >
             +
           </button>
           
         </div>
         {/* <p className="ms-3 text-success">Stock:{product.stock}</p> */}
         <div className="d-flex justify-content-center checkout-remove-btn mt-3">
           <button
             className="btn btn-danger btn-sm"
             onClick={() => removeFromCart(product.id)}
           >
             Remove
           </button>
         </div>
       </li>
       
          ))}
        </ul>
      )}

      <div className="checkout-summary text-center mt-4">
        <h4 className="total-stock">Total stock in cart: {totalStock}</h4>
        <h3 className="total-price">Total: {totalPrice} €</h3>
      </div>

      <div className="checkout-actions d-flex justify-content-center gap-3 mt-4">
        <button
          className="btn btn-primary btn-lg mx-2"
          onClick={handleProceedToPayment}
        >
          Proceed with Payment
        </button>
        <button
          className="btn btn-secondary btn-lg mx-2"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout