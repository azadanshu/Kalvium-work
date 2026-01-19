const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long']
    },
    description: {
      type: String,
      minlength: [10, 'Description must be at least 10 characters long']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Electronics', 'Home Appliances', 'Wearables', 'Accessories']
    },
    inStock: {
      type: Boolean,
      default: true
    },
    SKU: {
      type: String,
      required: [true, 'SKU is required'],
      unique: true,
      match: [/^[A-Z0-9]{5,10}$/, 'SKU must be 5-10 uppercase alphanumeric characters']
    }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
