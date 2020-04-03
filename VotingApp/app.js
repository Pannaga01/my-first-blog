var express = require("express"); 
var bodyParser = require("body-parser"); 
var path = require("path");
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/user_info',{useNewUrlParser:true,useUnifiedTopology:true}); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express();

app.use(express.static(__dirname+'public'));
app.use(bodyParser.json());
app.set('views',__dirname+'/public/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.post('/sign_up', function(req,res){ 
	var name = req.body.name; 
	var email =req.body.email; 
	var pass = req.body.password; 
	

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.redirect('select.html'); 
}) 

app.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect('./login.html'); 
}).listen(5755) 


console.log("server listening at port 5755"); 
