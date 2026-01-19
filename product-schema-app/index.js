const mongoose = require('mongoose');
const Product = require('./models/product.model');

async function main() {
    try {
    await mongoose.connect('mongodb://localhost:27017/techgadgets_db');
    console.log('✅ Connected to MongoDB');

    // Create a malformed product to trigger validation errors
    const invalidProduct = new Product({
      price: -50,          // negative price -> validation error
      category: 'Toys',    // not in enum -> validation error
      SKU: 'abc'           // fails regex -> validation error
      // name is missing -> validation error
    });

    try {
      await invalidProduct.validate();
    } catch (error) {
      console.error('❌ Validation Errors:');
      for (let key in error.errors) {
        console.error(`- ${error.errors[key].message}`);
      }
    }

  } catch (err) {
    console.error('MongoDB connection error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

main();