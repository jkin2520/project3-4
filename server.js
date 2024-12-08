// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

/**
 * POST /
 * Endpoint that accepts a JSON body with a "content" field.
 * Responds with a JSON object containing the "content" field.
 *
 * Request Body:
 * {
 *   "content": "Your content here"
 * }
 *
 * Response:
 * {
 *   "content": "Your content here"
 * }
 */
app.post('/', (req, res) => {
    // Extract the "content" field from the request body
    const { content } = req.body;

    // Send a JSON response with the "content" field
    res.json({ content });
});

// Export the app for testing purposes
module.exports = app;
