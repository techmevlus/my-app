var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// creating new instance of the mongoose.schema. the schema takes an object that shows the shape of your database entries.
var answerKeySchema = mongoose.Schema(
	{
	    paper       : Number,
        set         : String,
        answer      : Array
	},
	{collection : 'mppsc_pre_answer_key'});


//exporting our module to use in server.js
var AnswerKey = mongoose.model("answerKey", answerKeySchema);
module.exports = AnswerKey;
