const express = require('express');
const controller = require('./controller');

const router = express.Router();
router.post('/generate-qr',controller.generateQr);
module.exports =router;