// Add TextEncoder polyfill for Node.js environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

describe('GET /api/health', () => {
    it('should return status OK', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'OK' });
    });
});
