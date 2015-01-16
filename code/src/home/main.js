var dbconnection = require('../../database/main');

module.exports = function () {

	var _module = {

		init : function ( req, res ) {

			var songsmodel = dbconnection.modellist.songs;

			songsmodel
			.find()
			.limit(10)
			.select('songname filesize album')
			.exec(function(err, songs){

				if( err ) {
					console.log(err); 
					return false;
				}

				console.log(songs);

				res.render('index', { songs : songs });

			});
		}

	};

	return {
		init : function ( req, res ) {
			_module.init( req, res );
		}
	}
}();