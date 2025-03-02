const express = require('express');
const app = express();
const port = 5000;
const usersRouter = require('./routes/users'); 

// Middleware Logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.send('Hello Backend!');
});

// Menggunakan users routes
app.use('/users', usersRouter);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
