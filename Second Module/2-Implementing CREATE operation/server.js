import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user.routes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kalviumUser_db')
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err)=> console.error('MongoDB connection error:', err));

// Mount user routes at /users
app.use('/users', router); 

// Server start
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});