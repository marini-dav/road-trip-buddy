var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create();
var bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8180);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

/**************INDEX PAGE******************/
app.get('/', function(req,res,next){
	res.render('login');
});


/************RUN THE APP******************/
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});