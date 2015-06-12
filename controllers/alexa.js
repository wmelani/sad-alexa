"use strict";
var Twitter = require('twitter');
var ent = require('ent');
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


function alexaPostRequest(req,response,done){
    getRandomTweet(function(text){
        var obj = {
            "version": "1.0",
            "sessionAttributes": {
            },
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": text
                },
                "card": {
                    "type": "Simple",
                    "title": "Sadness",
                    "content": text
                },
                "shouldEndSession": true
            }
        };
        response.send(obj);
    });
}

function getRandomTweet(callback){
    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    client.get('statuses/user_timeline', {screen_name : "sosadtoday", exclude_replies : true}, function(err,items){
        var item = items[Math.floor(Math.random()*items.length)];
        callback(ent.decode(item.text));
    })
}

module.exports = exports;
exports.alexaGetRequest = alexaGetRequest;
exports.alexaPostRequest = alexaPostRequest;