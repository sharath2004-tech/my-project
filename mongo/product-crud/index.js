const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware for JSON parsing

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/productsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use("/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
