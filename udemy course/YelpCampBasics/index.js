var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongoDB = "mongodb://yelpcamp_app";

mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	var campgrounds = [
		{name:"Cloud's Rest", image:"http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"}
	]
	res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(3775); 
