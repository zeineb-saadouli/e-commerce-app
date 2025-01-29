// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/products">Products</Link></li>

                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>

                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/register">Inscription</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
