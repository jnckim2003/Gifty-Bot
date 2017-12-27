const
  request = require('request'),
  PAGE_ACCESS_TOKEN = 'EAABnLFwusacBAFbHzs4smZAqO4BAUecMxUaOKF6JtXhobEHAtpOhu7ZAnT69z5AQpDLEZBa8mllgXGgikQ1ZA3VCKxpd08XvdP5jgXIUr9K4l1LS1nS2f6Nd182tPmr43fNw3YNXCOOwkHlAeYFMM68nZBGYECmsrjIYsu0kigAZDZD',
  api = require("./api");

// Manages postback messages
function handlePostback(event) {

   	let payload = event.postback.payload;
    let sender = event.sender.id;
    let choice = 'Here are my recommendations for ';
    let content = {"text": ""};

    switch(payload) {

     	case 'getStarted':
    		content = api.p_getStarted;
      		break;

      	case 'birthday':
      		sendMessage(sender, toText(choice + 'Birthday gift'));
      		content = api.p_birthday;
      		break;

      	case 'b_cake':
      		content = api.b_cake;
      		break;

      	case 'b_coffee':
      		content = api.b_coffee;
      		break;

      	case 'b_giftbox':
      		content = api.b_giftbox;
      		break;

      	case 'christmas':
      		sendMessage(sender, toText(choice + 'Christmas gift'));
      		content = api.p_christmas;
      		break;

      	case 'c_letter':
      		content = api.c_letter;
      		break;

      	case 'c_book':
      		content = api.c_book;
      		break;

      	case 'c_lamp':
      		content = api.c_lamp;
      		break;

   		case 'wedding':
   			sendMessage(sender, toText(choice + 'Wedding gift'));
   			content = api.p_wedding;
   			break;

   		case 'w_box':
   			content = api.w_box;
   			break;

   		case 'w_wine':
   			content = api.w_wine;
   			break;

   		case 'w_robe':
   			content = api.w_robe;
   			break;
   	}
   	sendMessage(sender, content);
}

// Manages text messages
function handleMessage(event) {

	let sender = event.sender.id;
	let message = event.message;
	let content = {"text": ""};

	if (message.quick_reply) {

   		var qr = message.quick_reply.payload;

   		switch(qr) {

   			case 'b_cake_y':
   				content = api.b_cake_y;
   				break;

   			case 'b_coffee_y':
   				content = api.b_coffee_y;
   				break;

   			case 'b_giftbox_y':
   				content = api.b_giftbox_y;
   				break;

   			case 'c_letter_y':
   				content = api.c_letter_y;
   				break;

   			case 'c_book_y':
   				content = api.c_book_y;
   				break;

   			case 'c_lamp_y':
   				content = api.c_lamp_y;
   				break;

   			case 'w_box_y':
   				content = api.w_box_y;
   				break;

   			case 'w_wine_y':
   				content = api.w_wine_y;
   				break;

   			case 'w_robe_y':
   				content = api.w_robe_y;
   				break;

   			case 'no':
   				content = api.no;
   				break;
   		}
    	sendMessage(sender, content);

    } else
    if (message.text) {
    
         processMessage(event);
    	
    } else {

    	content = 'I can only see text messages. Please use a different format!';
    	sendMessage(sender, toText(content));
    }
}

// Handles text messages that are not quick replies
function processMessage(event) {

	let sender = event.sender.id;
	let content = event.message.text;

	//check greeting
	const greeting = firstEntity(event.message.nlp, 'greetings');
	const bye = firstEntity(event.message.nlp, 'bye');
	const thanks = firstEntity(event.message.nlp, 'thanks');

	if (bye && bye.confidence > 0.8) {
	
		content = pickResponse("bye");
	
	} else
	if (greeting && greeting.confidence > 0.8) {
		
		content = pickResponse("greeting");

	} else
	if (thanks && thanks.confidence > 0.8) {

		content = pickResponse("thanks");

	} else
	if (content.toLowerCase().includes("christmas")) {

		content = "I got some recommendations for a Christmas gift.";

	} else
	if (content.toLowerCase().includes("birthday")) {

		content = "I got some recommendations for a birthday gift.";

	} else
	if (content.toLowerCase().includes("wedding")) {

		content = "I got some recommendations for a wedding gift.";

	} else {

		content = pickResponse("else");
	}
	sendMessage(sender, toText(content));
}

function firstEntity(nlp, name) {

	return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
}

function toText(content) {

	return {"text": content};
}

function pickResponse(type) {

	let array = [];

	switch(type) {

		case 'greeting':
			array = api.nlp_greeting;
			break;

		case 'thanks':
			array = api.nlp_thanks;
			break;

		case 'bye':
			array = api.nlp_bye;
			break;

		case 'else':
			array = api.nlp_else;
			break;
	}

	let randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

function sendMessage(sender, content) {

    let url = 'messages';
    let newContent = {

    	"recipient": {"id": sender},
    	"message": content
    };

    callRequest(url, newContent, 'Sending Message');

}

// Sets up messenger profile API functions
function initialSetup() {

	let url = 'messenger_profile';

	callRequest(url, api.getStarted, 'Get Started Button');
	callRequest(url, api.persistentMenu, 'Persistent Menu');
	callRequest(url, api.greeting, 'Greeting');
	callRequest(url, api.whitelisted, 'Whitelisted Domain'); 
}

// Sends a request to a request url
function callRequest(reqUrl, content, cmd) {

	request({

        url: 'https://graph.facebook.com/v2.6/me/' + reqUrl,
    	qs: {access_token: PAGE_ACCESS_TOKEN},
    	method: 'POST',
    	json: content
    },
    function (error, response, body) {
      
        if (!error && response.statusCode == 200) {
          
            console.log(cmd + " Succeed.");
            console.log(body);
          
        } else { 
          
            console.log(cmd + " Failed.");
            console.log(body);
            
        }
    });
}

module.exports = {

	handlePostback: handlePostback,
	handleMessage: handleMessage,
	initialSetup: initialSetup
}