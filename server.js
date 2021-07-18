var app = express();
var bodyParser = require('body-parser'); //BODY Parser - lets us use the req.body
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose'); //  MongoDB
//mongodb+srv://cluster0.xt9zo.mongodb.net/myFirstDatabase
//mongodb://localhost/my_db
var url = 'mongodb+srv://techmevlus:0000@cluster0.xt9zo.mongodb.net/mppsc_db?retryWrites=true&w=majority';
var promise = mongoose.connect(url);

console.log("WORKS FINE")
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', ' * ');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent questions
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
var router = express.Router();
var AnswerKey = require('./../models/answerKey.js');

router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests

//to get test data(for quiz)
router.route('/getAnswerKey')
.post(function(req,res){
	var paper = req.body.paper;
	var set = req.body.set;
	console.log("Paper ="+paper);
	console.log("Test ="+set);
	//Exam.findOne({'_id':examId, 'test.auth_id':authorId},'test.test_data',function(err, dataFromDB) {
	Exam.findOne({'paper':paper, 'set':set},function(err, dataFromDB) {
		if (err){
			res.send(err);
		}
		//responds with a json object of our database questions.
		res.json(dataFromDB);
		console.log(dataFromDB)
	});
});

app.listen(3001, function() {
	console.log('Api successfully running');
	
});