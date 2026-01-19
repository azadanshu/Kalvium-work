import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  dateOfBirth: Date,
  phone: String,
  address: addressSchema,
  bio: String,
  avatar: String,
  isActive: Boolean,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
