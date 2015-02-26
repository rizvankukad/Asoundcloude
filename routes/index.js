/*
* Routeing JS file
*
* Application Routing Module
* Contains route details
*
* Author: Rizwan Kukad
* Date: 4-January-2014 03:12 AM IST
*/

var express = require('express'),
	router = express.Router(),
	controller = require('../code/controllers/controller.js');

/* Home controller */
router.get('/', function(req, res) {
	controller.homecontroller(req, res);
});

/* Player controller */
router.get('/player', function(req, res) {
	controller.playercontroller(req, res);
});

/* User controller */
router.get('/user', function(req, res) {
	controller.usercontroller(req, res);
});

module.exports = router;