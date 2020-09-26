const express = require('express');
const router = express.Router();
const cors = require('cors');
const technologiesCtrl = require('../controllers/technologies.controller');

router.get('/getTechnologies', cors(), technologiesCtrl.getTechnologies);

module.exports = router;