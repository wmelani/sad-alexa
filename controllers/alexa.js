"use strict";
var Twitter = require('twitter');
var ent = require('ent');
var Promise = require('mpromise');
function alexaGetRequest(req,response,done){
    handleRequest(req,response,done);
}

function handleRequest(req,response,done){
    getRandomTweet().then(function(text){
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
function alexaPostRequest(req,response,done){
    handleRequest(req,response,done);
}

function getRandomTweet(){
    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    var promise = new Promise;
    client.get('statuses/user_timeline', {screen_name : "sosadtoday", exclude_replies : true}, function(err,items){
        var item = items[Math.floor(Math.random()*items.length)];
        promise.resolve(err,ent.decode(item.text));
    });

    return promise;
}

module.exports = exports;
exports.alexaGetRequest = alexaGetRequest;
exports.alexaPostRequest = alexaPostRequest;