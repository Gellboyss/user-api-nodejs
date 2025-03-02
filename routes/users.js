const express = require('express');
const router = express.Router();

// User data
const users = [
    { id: 1, name: "budi" },
    { id: 2, name: "santoso" },
    { id: 3, name: "kibo" }
]

// Middleware Logger
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan!" });
    }
    res.json(user);
});

// POST new user
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT (edit) user by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User tidak ditemukan!" });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.status(200).json(users[userIndex]);
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User tidak ditemukan!" });
    }
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({ message: "User Berhasil Dihapus", user: deletedUser[0] });
});

module.exports = router;
