const express = require('express');
const router = express.Router();

const data = require('../data/db');

router.get('/', async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
