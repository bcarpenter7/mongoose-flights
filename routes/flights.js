var express = require('express');
var router = express.Router();

/* GET users listing. */
const flightCtrl = require('../controllers/flights')


// New
router.get('/new', flightCtrl.new)

// Create
router.post('/', flightCtrl.create)

//Get All
router.get('/', flightCtrl.index)


module.exports = router;
