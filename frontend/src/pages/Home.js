// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Nos Produits</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
