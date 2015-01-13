var mongoose = require('mongoose');

module.exports = {

	loadmongoschema : function (schemalist) {

		var schemaobj = {};

		for(var schema in schemalist){

			schemaobj[schema] = mongoose.Schema(schemalist[schema].schema);

			for(var custom_method in schemalist[schema].method) {
				schemaobj[schema].methods[custom_method] = schemalist[schema].method[custom_method]
			}
		}

		return schemaobj;
	}

};