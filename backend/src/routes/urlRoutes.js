const express = require('express');
const { createShortUrl, redirectShortUrl } = require('../controllers/urlController');

const router = express.Router();

// Route to create a short URL
router.post('/shorten', createShortUrl);

// Route to redirect a short URL
router.get('/:shortUrl', redirectShortUrl);

module.exports = router;
