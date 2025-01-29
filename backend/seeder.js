// seeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // Ensure the Product model path is correct

dotenv.config(); // Load environment variables
// Manually defined products with specific images
const products = [
    {
      name: "Apple iPhone 15 (128 Go) - Noir",
      price: 745,
      description: "A high-performance phone .",
      category: "Electronics",
      stock: 10,
      image: "https://m.media-amazon.com/images/I/61eEYLATF9L._AC_SL1500_.jpg",
    },
    {
      name: "Connected Watch",
      price: 69.99,
      description: "A practice connected watch with bleutooth/ Sport Mode .",
      category: "Electronics",
      stock: 40,
      image: "https://m.media-amazon.com/images/I/71y5m2CJLUL._AC_SL1500_.jpg",
    },
    {
      name: "Coat women",
      price: 54.51,
      description: "Beautigul coat for winter.",
      category: "BodyWear",
      stock: 50,
      image: "https://m.media-amazon.com/images/I/615+CkdO5DL._AC_SX569_.jpg",
    },
    {
      name: "White shoes",
      price: 36,
      description: "Beautiful and practice shoes for women.",
      category: "Sport wear",
      stock: 70,
      image: "https://m.media-amazon.com/images/I/61rz6dvQJSL._AC_SY625_.jpg",
    },
    {
      name: "Water Bottle",
      price: 14.99,
      description: "Reusable stainless steel water bottle to keep your drinks hot or cold.",
      category: "Accessories",
      stock: 120,
      image: "https://monos.com/cdn/shop/products/Kiyo-UVC-Bottle-500ml-Blue-Hour_900x.png?v=1678603856",
    },
  {
      name: "Bluetooth Speaker",
      price: 29.99,
      description: "Compact and portable Bluetooth speaker with excellent sound quality.",
      category: "Electronics",
      stock: 40,
      image: "https://m.media-amazon.com/images/I/718yxonHN8L.jpg",
    },
  ];
  const seedDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to MongoDB");
  
      await Product.deleteMany(); // Clear existing products
      console.log("Existing products deleted");
  
      await Product.insertMany(products); // Insert manually defined products
      console.log("Database seeded successfully with manual products!");
  
      process.exit(); // Exit once done
    } catch (error) {
      console.error("Error seeding the database:", error);
      process.exit(1); // Exit with failure code
    }
  };
  
  seedDatabase();