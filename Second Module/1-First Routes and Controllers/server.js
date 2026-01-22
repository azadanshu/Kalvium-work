const express = require('express');
const app = express();
const PORT = 3000;

// Import user routes
const { getUserById, getAllUsers } = require('./controllers/user.controller');

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});


app.get('/users', getAllUsers);

app.get(`/users/:id`, getUserById);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})