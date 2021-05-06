const express = require('express');
const authController = require('../../contrillers/auth.controller');

const router = express.Router();

router.post('/google/authenticate', authController.google);

module.exports = router;
