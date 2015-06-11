var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('so sad today');
});

app.post('/', function(request, response) {
  var body = JSON.parse(request.body);

	var obj = {
		  "version": "1.0",
		  "sessionAttributes": {
		  },
		  "response": {
		    "outputSpeech": {
		      "type": "PlainText",
		      "text": "I am so sad."
		    },
		    "card": {
		      "type": "Simple",
		      "title": "Sadness",
		      "content": "So sad"
		    },
		    "shouldEndSession": true
		  }
		};
	response.send(obj);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
