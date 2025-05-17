const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample API endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Microservice is running on http://localhost:${PORT}`);
    console.log('Health endpoint available at http://localhost:3000/api/health');
});