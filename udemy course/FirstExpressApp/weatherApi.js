var request = require('request');
request("api.openweathermap.org/data/2.5/weather?lat=35&lon=139",function(error,response,body){
	if(!error && response.statusCode == 200){
		console.log(body);
	}
});
