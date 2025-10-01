const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"));

// Insert sample products (run once or protect with a flag in production)
app.get("/insert-sample", async (req, res) => {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: "Running Shoes",
      price: 120,
      category: "Footwear",
      variants: [
        { color: "Red", size: "M", stock: 10 },
        { color: "Blue", size: "L", stock: 5 }
      ]
    },
    {
      name: "Winter Jacket",
      price: 200,
      category: "Apparel",
      variants: [
        { color: "Black", size: "S", stock: 8 },
        { color: "Gray", size: "M", stock: 12 }
      ]
    },
    {
      name: "Smartphone",
      price: 699,
      category: "Electronics",
      variants: []
    }
  ]);
  res.send("Sample products inserted.");
});

// Use MVC routes
app.use("/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
