const users = [
    {id: 1, name: "Alice"}, 
    {id: 2, name: "Bob"}
];

const getAllUsers = (req, res) => {
    res.json(users); // provide all users
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: "User not found"});
    }
};

module.exports = {
    getAllUsers,
    getUserById
};