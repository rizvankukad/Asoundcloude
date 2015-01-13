var mongoose = require('mongoose'),
	mongooselib = require('../lib/mongooselib'),
	schemas = require('./schema');

module.exports = {

	checkconnection : function (app) {

		mongoose.connect(app.get('datasources').dburl);

		var db = mongoose.connection;

		db.on('error', console.error.bind(console, 'connection error:'));

		db.once('open', function (callback) {

			console.log('Hurrey, Database is available...');
			mongoose.connection.close();
		});
	},

	connect : function (app) {

		var _module = this;

		mongoose.connect(app.get('datasources').dburl);

		var db = mongoose.connection;

		db.on('error', console.error.bind(console, 'connection error:'));

		db.once('open', function (callback) {
			
			console.log('Connected to Database main.connect()');
			
			mongoose.connection.close();
		});

		_module.initializeshema();

		return _module;
	},

	initializeshema : function () {

		console.log('initializeshema()');
		
		var schemalist = mongooselib.loadmongoschema(schemas);

		this.initializemodels();
	},

	initializemodels : function () {

		console.log("initializemodels()");

	}

};