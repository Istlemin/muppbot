'use strict';
let util = require('util');
let http = require('http');
var currentWeekNumber = require('current-week-number');

let Bot  = require('@kikinteractive/kik');

let bot = new Bot({
    username: 'muppbot',
    apiKey: '',
    baseUrl: ''
});

bot.updateBotConfiguration();

var personer = [
{name:"Knut",week:35,kik:""},
{name:"William",week:36,kik:""},
{name:"Ali",week:37,kik:""},
{name:"Gustav G",week:38,kik:"guctav"},
{name:"Leopold",week:39,kik:""},
{name:"Hektor",week:40,kik:"Bokaka9"},
{name:"Gustav T",week:41,kik:""},
{name:"Axel V",week:42,kik:"flypower01"},
{name:"Erika",week:43,kik:"Teklasn"},
{name:"ingen",week:44,kik:""},
{name:"Gustaf H",week:45,kik:"mageprist"},
{name:"Hjalmar",week:46,kik:"bobba666"},
{name:"Majs",week:47,kik:"majsfadi"},
{name:"Jonathan",week:48,kik:"loovjo"},
{name:"Melina",week:49,kik:""},
{name:"Nathan",week:50,kik:"nissish"},
{name:"Kalle",week:51,kik:"Kalle_Lindblad01"},
{name:"ingen",week:0,kik:""},
{name:"ingen",week:1,kik:""},
{name:"Fredrik",week:2,kik:"istlemin"},
{name:"Kaleb",week:3,kik:"kalebgirmay"},
{name:"Philip",week:4,kik:"qwerty199990"},
{name:"Axel N",week:5,kik:""},
{name:"Oskar",week:6,kik:""},
{name:"Knut",week:7,kik:""},
{name:"William",week:8,kik:""},
{name:"ingen",week:9,kik:""},
{name:"Ali",week:10,kik:""},
{name:"Gustav G",week:11,kik:""},
{name:"Leopold",week:12,kik:""},
{name:"Hektor",week:13,kik:""},
{name:"Hektor",week:14,kik:""},
{name:"Gustav T",week:15,kik:""},
{name:"Axel V",week:16,kik:""},
{name:"Erika",week:17,kik:""},
{name:"Gustaf H",week:18,kik:""},
{name:"Hjalmar",week:19,kik:""},
{name:"Majs",week:20,kik:""},
{name:"Jonathan",week:21,kik:""},
{name:"Melina",week:22,kik:""},
{name:"Nathan",week:23,kik:""},
{name:"Kalle",week:24,kik:""},
];



bot.onTextMessage((message) => {
	console.log(message);
	var week = currentWeekNumber();
	for (var i = 0; i < personer.length; i++) {
		if(personer[i].week==week){
		    message.reply("Den här veckan bakar " + personer[i].name + ". Nästa vecka bakar " + personer[i+1].name + ".");
			break;
		}
	}
});

let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 47624);
  
setInterval(function(){
	console.log("current hour: " + new Date().getHours());
	if(new Date().getHours()!=17) return;
	for (var i = 0; i < personer.length; i++)
		if(personer[i].week==week&&personer[i].kik)
			bot.send("Du har bakvecka den här veckan! Baka!!!",personer[i].kik);
},3600*1000);
//bot.send("Fredrik är bäst","","1bb2ad15357736f342b10ee57b99a589bdf479a1bc772b57bc06a48d2cbfe8fc");//,"7ea6b1a5a97ec80757c886acedcb3814cd3c0ca09403c79a624e02a59a14f6d3");
/*
c73589e03e08ab989fcf28330f8bbb2445e9865ef3a662be1d41f05261beffd3
*/