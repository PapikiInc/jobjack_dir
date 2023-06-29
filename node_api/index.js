const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//handle CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

//api to retrieve directory listing
app.get('/directory', (req, res) => {
    const directoryPath = req.query.path || './';

    fs.readdir(directoryPath, { withFileTypes: true}, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read directory'});
        }
    })
});

//node run
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});