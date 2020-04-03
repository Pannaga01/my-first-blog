var express = require("express");

var app = express();

app.get("/", function(req,res){
	res.send("Hi!");
});

app.get("/speak/:animal", function(req,res){
	
	var sounds={
		pig: "oink",
		cow: "moo",
		dog: "bow bow"
	}
	var animal = req.params.animal.toLowerCase();
	var sound= sounds[animal];
	
	res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:string/:number", function(req,res){
	
	var string = req.params.string;
	var number = req.params.number;
	if (string=="hello" && number==3){
	 sound="hello"}
	else if (string=="hello" && number==5){
	 sound="hello hello hello"}
	else if (string=="blah" && number==2){
	 sound="blah blah"}
	else {
	 sound="sorry...page not found"}
	res.send(sound);
});


app.get("*",function(req,res){
	res.send("sorry...page not found");
});

app.listen(3500);

