"use strict";

function alexaGetRequest(req,response,done){
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

}
function alexaPostRequest(req,res,done){
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
}


module.exports = exports;
exports.alexaGetRequest = alexaGetRequest;
exports.alexaPostRequest = alexaPostRequest;