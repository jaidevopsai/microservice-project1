const request = require('supertest');
const express = require('express');

// Import your app or recreate it for testing
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});
app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers.' });
  }
  res.json({ result: a + b });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

describe('API Endpoints', () => {
  it('GET /api/health should return status OK', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'OK' });
  });

  it('GET /api/greet/:name should greet the user', async () => {
    const res = await request(app).get('/api/greet/Alice');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, Alice!' });
  });

  it('POST /api/add should add two numbers', async () => {
    const res = await request(app).post('/api/add').send({ a: 5, b: 7 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 12 });
  });

  it('POST /api/add should return 400 if inputs are not numbers', async () => {
    const res = await request(app).post('/api/add').send({ a: 'foo', b: 7 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Both a and b must be numbers.' });
  });

  it('GET /api/unknown should return 404', async () => {
    const res = await request(app).get('/api/unknown');
    expect(res.statusCode).toBe(404);
  });
});
