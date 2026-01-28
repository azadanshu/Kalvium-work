const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/product.module');

// router.get('/', async (req, res) => {
//   try {
//     console.log("Fetching all products");
//     res.status(200).json("Fetching all products");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//create a product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a product by ID :- (PATCH /api/products/:id)

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid Product ID');
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Delete a product by ID :- (DELETE /api/products/:id)

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid Product ID');
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send('Product not found');
    }

    // Success: No content
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
