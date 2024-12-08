const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const { content } = req.body;
    res.json({ content });
});

module.exports = app;
