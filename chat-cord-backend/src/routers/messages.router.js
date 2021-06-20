const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages.controller');
const errorHandler = require('../utils/errorhandler');

router.get('/', messagesCtrl.getMessages, errorHandler);
router.post('/', messagesCtrl.postMessages, errorHandler);

module.exports = router;