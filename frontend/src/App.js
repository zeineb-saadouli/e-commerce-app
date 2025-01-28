// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Register from './components/Register';
import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
function App() {
    return (
      <CartProvider>

      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
        </CartProvider>
        
    );
}

export default App;
