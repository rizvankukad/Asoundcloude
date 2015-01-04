var mongoose = require('mongoose');

module.exports = {

	schemaList : {
		userschema : null,
		songschema : null
	},

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

		this.userschema = this.getuserschema();
		this.songshema = this.getsongshema();
	},

	getuserschema : function () {

		console.log('getuserschema()');

		 return mongoose.Schema({
		 	userid : Number,
		 	username : String,
		 	userfname : String,
		 	userlname : String,
		 	password : String,
		 	dob : Date,
		 	playlist : []
		 });

	},

	getsongshema : function () {

		console.log('getsongshema()');

		return mongoose.Schema({
			songid : Number,
			songname : String,
			songType : String,
			keyword : String,
			artists : String,
			album : { name: String, releasedate : Date, type : String },
			rating : Number,
			uploadeddate : Date,
			filesize : Number,
			thumbimage : String,
			filelocation : String
		});

	}

};