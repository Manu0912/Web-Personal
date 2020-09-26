const express = require('express');
const router = express.Router();
const cors = require('cors');
const userCtrl = require('../controllers/user.controller');

router.post('/admin/login/post', cors() , userCtrl.postUser);
router.post('/admin/login/get', cors() , userCtrl.logInUser);

module.exports = router;