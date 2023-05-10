const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path-helper');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'readNotes.html'));
});

module.exports = router;
