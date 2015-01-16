module.exports = {
	"user" : {
		"schema" : {
			userid : Number,
			username : String,
			userfname : String,
			userlname : String,
			password : String,
			dob : Date,
			playlist : []
		},
		"methods" : {

		},
		"autoincreament" : ['userid']
	},
	"songs" :{
		"schema" : {
			songid : Number,
			songname : String,
			songType : String,
			keyword : String,
			artists : String,
			album : { 
				albumname : { type: String, trim: true },
				releasedate : { type: Date, default:  Date.now },
				type : { type: String, trim: true }
			},
			rating : Number,
			uploadeddate : Date,
			filesize : Number,
			thumbimage : String,
			filelocation : String
		},
		"methods" : {
			
		},
		"autoincreament" : ['songid']
	},
	"counter" : {
		"schema" : {
			_id : String,
			seq : Number
		},
		"methods" : {

			getNextSequence : function (name) {

				var ret = this.findAndModify({
					query: { _id: name },
					update: { $inc: { seq: 1 } },
					new: true
				});

				return ret.seq;					
			}
		}
	}
};