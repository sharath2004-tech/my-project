const Product = require('../models/Product');

// Filter by category
exports.getByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.cat });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Filter by variant color
exports.getByColor = async (req, res) => {
  try {
    const products = await Product.find({ "variants.color": req.params.color });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
