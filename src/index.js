require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample API endpoint: Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Sample API endpoint: Greet user
app.get('/api/greet/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello, ${name}!` });
});

// Sample API endpoint: Add two numbers
app.post('/api/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be numbers.' });
    }
    res.json({ result: a + b });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Microservice is running on http://localhost:${PORT}`);
    console.log('Health endpoint: GET http://localhost:3000/api/health');
    console.log('Greet endpoint: GET http://localhost:3000/api/greet/:name');
    console.log('Add endpoint: POST http://localhost:3000/api/add { "a": 1, "b": 2 }');
});