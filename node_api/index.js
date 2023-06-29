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
            return res.status(500).json({ 
                error: 'Failed to read directory'
            });
        }

        const directoryListing = files.map((file) => {
            const fullPath = path.join(directoryPath, file.name);
            const stats = fs.statSync(fullPath);

            return{
                name: file.name,
                fullPath: fullPath,
                size: stats.size,
                extension: path.extname(file.name),
                createdDate: stats.birthtime,
                isDirectory: file.isDirectory(),
                permissions: getPermissions(stats)
            };
        });

        res.json({ directoryListing });
    });
});

// Function for permissions on directory
function getPermissions(stats) {
    return {
      read: !!(stats.mode & 0o400),
      write: !!(stats.mode & 0o200),
      execute: !!(stats.mode & 0o100)
    };
  }

//node run
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});