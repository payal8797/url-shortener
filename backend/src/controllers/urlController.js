const Url = require('../models/Url');
const shortid = require('shortid');

const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ message: 'Original URL is required' });
  }

  try {
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.status(200).json(url);
    }

    const shortUrl = shortid.generate();
    url = await Url.create({ originalUrl, shortUrl });

    return res.status(201).json(url);
  } catch (error) {
    console.error('Error creating short URL:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const redirectShortUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error('Error redirecting short URL:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createShortUrl, redirectShortUrl };
