var fs = require('fs');

module.exports = function () {

	var _module = {

		init : function (req, res) {
			var stats = fs.statSync("./music/test.mp3");
			var fileSizeInBytes = stats["size"];
			var readableStream = fs.createReadStream("./music/test.mp3");
			res.status(200).set({ 'Content-Type' : 'audio/mpeg', 'content-length': fileSizeInBytes});
			readableStream.pipe(res);

			readableStream.on('data', function(chunk) {
				console.log(chunk);
			});

			readableStream.on('end', function() {
				console.log('data');
				res.end('done');
			});
		}

	};

	return {
		init : function (req, res) {
			_module.init(req, res);
		}
	}

}();