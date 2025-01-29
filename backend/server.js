const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

// Import des routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors()); //connexion avec le front
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,

    })
  );