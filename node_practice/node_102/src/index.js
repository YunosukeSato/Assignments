// Import core modules
const path = require('path');

// Root path
const rootDir = require('./utils/path-helper');

// Import 3rd party libralies
const express = require('express');
const bodyParser = require('body-parser');

// Initialize
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(require('./routes/home'));
app.use('/leave-note', require('./routes/leaveNote'));
app.use('/read-notes', require('./routes/readNotes'));

// catch-all-middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Listener
const PORT = process.env.PORT || 8080;
app.listen(PORT);
