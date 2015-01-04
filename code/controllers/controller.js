/*
* Controller JS file
*
* Contains All main controllers
*
* Author: Rizwan Kukad
* Date: 4-January-2014 06:05 AM IST
*/

module.exports = {

	/* Home controller callback */
	homecontroller : function (req, res) {
		res.end('Home');
	},

	/* User controller callback */
	usercontroller : function (req, res) {
		res.end('User');
	}
};