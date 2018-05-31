const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.get('/getAll',handlers.getProductList);

module.exports = router;