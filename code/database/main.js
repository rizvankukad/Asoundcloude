var mongoose = require('mongoose'),
	mongooselib = require('../lib/mongooselib'),
	schemas = require('./schema');

module.exports = {

	modellist : {},

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
			
			console.log('Database Alive ...');
			
			//mongoose.connection.close();
		});

		this.modellist = _module.initializeshema();

		/*var songmodel = new this.modellist.songs({
			songid : 2,
			songname : "Test SOng name 2",
			songType : "Test song type 2",
			keyword : "TEst keyword 2",
			artists : "Test artist 2",
			album : { albumname: "Test album 2", releasedate : new Date(), type : "test album type 2" },
			rating : 5,
			uploadeddate : new Date(),
			filesize : 6666,
			thumbimage : "test_thumb_path 2",
			filelocation : "Test file location 2"
		});

		songmodel.save(function(err){

			if(err) console.log(err); return false;

			console.log("data saved...");

			mongoose.connection.close();
		});*/



		return _module;
	},

	initializeshema : function () {

		var schemalist = mongooselib.loadmongoschema(schemas);

		var modellist = this.initializemodels(schemalist);

		return modellist;
	},

	initializemodels : function (schemalist) {

		for(var schema in schemalist) {

			this.modellist[schema] = mongoose.model( schema, schemalist[schema] );
		}

		return this.modellist;
	}

};