/*
* Controller JS file
*
* Contains All main controllers
*
* Author: Rizwan Kukad
* Date: 4-January-2014 06:05 AM IST
*/

var home = require('../src/home/main.js');

module.exports = {

	/* Home controller callback */
	homecontroller : function (req, res) {
		home.init(req,res)
	},

	/* User controller callback */
	usercontroller : function (req, res) {
		res.end('User');
	}
};