const request = require('supertest');
const express = require('express');

const app = require('../server');

describe('POST /', () => {
    it('should respond with the content field from the request body', async () => {
        const response = await request(app)
            .post('/')
            .send({ content: 'Hello, World!' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.content).toBe('Hello, World!');
    });
});
