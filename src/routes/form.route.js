const express = require('express');
var router = express.Router();
var KitsController = require('../controllers/kits.controller')
var fileController = require('../controllers/fileUpload.controller')


//For saving the form
router.post('/save',  KitsController.SaveForm)

module.exports = router;