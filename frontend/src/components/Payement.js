import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate=useNavigate()
  // État local pour les champs du formulaire
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [error, setError] = useState("");
  const redericetHandle=()=>{
    navigate('/')
  }
  // Validation simple
  const validateForm = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
      setError("Tous les champs sont obligatoires.");
      return false;
    }
    // Validation du numéro de carte (pour simplification, il doit faire 16 chiffres)
    if (!/^\d{16}$/.test(cardNumber)) {
      setError("Le numéro de carte doit comporter 16 chiffres.");
      return false;
    }
    // Validation de la date d'expiration (au format MM/AA)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setError("La date d'expiration doit être au format MM/AA.");
      return false;
    }
    // Validation du CVV (3 chiffres)
    if (!/^\d{3}$/.test(cvv)) {
      setError("Le CVV doit comporter 3 chiffres.");
      return false;
    }
    // Si tout est valide
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Ici, tu enverras les données de paiement à ton API backend
      console.log("Formulaire validé, envoyer les données :", {
        cardNumber,
        expiryDate,
        cvv,
        cardHolderName,
      });
      // Exemple : appel à une API
      // axios.post("/api/payment", { cardNumber, expiryDate, cvv, cardHolderName })
      //   .then(response => console.log("Paiement réussi", response))
      //   .catch(error => console.log("Erreur de paiement", error));
    }
  };

  return (
    <div className="payment-form">
      <h2>Formulaire de Paiement</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de carte</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            placeholder="1234 5678 9876 5432"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Date d'expiration (MM/AA)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength="5"
            placeholder="MM/AA"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            placeholder="123"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardHolderName">Nom du titulaire</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="Jean Dupont"
          />
        </div>

        <button onClick={()=> redericetHandle()} type="submit">Payer</button>
      </form>
    </div>
  );
};

export default Payment;