let yes_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png";
let no_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/No_Cross.svg/2000px-No_Cross.svg.png";

const getStarted = {

    "get_started": {
    	"payload": "getStarted"
    }
};

const persistentMenu = {

	"persistent_menu":[
	{
		"locale": "default",
		"call_to_actions":[
		{
			"title": "Gift Options",
			"type": "nested",
			"call_to_actions":[
			  {
			  	"title": "Birthday gift",
			  	"type": "postback",
			  	"payload": "birthday"
			  },
			  {
			  	"title": "Christmas gift",
			  	"type": "postback",
			  	"payload": "christmas"
			  },
			  {
			  	"title": "Wedding gift",
			  	"type": "postback",
			  	"payload": "wedding"
			  }
			]
		}]
	}]
};

const greeting = {

	"greeting":[
	{
		"locale": "default",
		"text": "Hello!"
	}, {
		"locale": "en_US",
		"text": "Welcome!"
	}]
};

const whitelisted = {

	"whitelisted_domains": [
		"https://www.gifts.com",
		"https://www.uncommongoods.com",
		"https://www.artifactuprising.com",
		"https://www.markandgraham.com",
		"https://www.restorationhardware.com"
	]
}

const p_getStarted = {

	"text": "Hi, let me help you to choose a perfect gift! You can choose gift options in the menu below."
};

const p_birthday = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "generic",
			"elements": [
				{
					"title": "Birthday Cake",
					"image_url": "https://cimages.prvd.com/is/image/ProvideCommerce/GFB_17_SCABDYCHCMOU_W1_SQ?$PCRProductImage$&wid=446",
					"subtitle": "Classic chocolate mousse torte",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "b_cake"
					}]
				},
				{
					"title": "Coffee and Cocoa",
					"image_url": "https://cimages.prvd.com/is/image/ProvideCommerce/GFB_17_BEV2006B_W1_SQ?$PCRProductImage$&wid=446",
					"subtitle": "Starbucks mugs, coffee and cocoa",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "b_coffee"
					}]
				},
				{
					"title": "Lavender Gift Box",
					"image_url": "https://cimages.prvd.com/is/image/ProvideCommerce/GFB_17_SPA1003C_W10_SQ?$PCRProductImage$&wid=446",
					"subtitle": "Lavender body care set",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "b_giftbox"
					}]
				}
			]
		}
	}
};


const b_cake = {

	"text": "Do you wish to choose Birthday Cake?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "b_cake_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const b_cake_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose a Birthday Cake for a birthday gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.gifts.com/product/Happy-Birthday-Chocolate-Mousse-Torte-with-Plaque-30067825?trackingpgroup=glpfbir&sk=&ref=GFTorganicgglunkwn&prid=gftseogu&productgroup=glpfbir&viewPos=56",
				"title": "See More Details"
			}]
		}
	}
};

const b_coffee = {

	"text": "Do you wish to choose Starbucks Coffee and CoCoa?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "b_coffee_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const b_coffee_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Starbucks Coffee and Cocoa for a birthday gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.gifts.com/product/Classic-Starbucks-Coffee--Cocoa-30247271?trackingpgroup=glpfbir&sk=&ref=GFTorganicgglunkwn&prid=gftseogu&productgroup=glpfbir&viewPos=95",
				"title": "See More Details"
			}]
		}
	}
};

const b_giftbox = {

	"text": "Do you wish to choose Lavender Gift Box?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "b_giftbox_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const b_giftbox_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Lavender Gift Box for a birthday gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.gifts.com/product/Lavender-Relaxation-Gift-Box-30233621?trackingpgroup=glpfbir&sk=&ref=GFTorganicgglunkwn&prid=gftseogu&productgroup=glpfbir&viewPos=147",
				"title": "See More Details"
			}]
		}
	}
};

const p_christmas = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "generic",
			"elements": [
				{
					"title": "A Year of Gratitude",
					"image_url": "https://www.uncommongoods.com/images/items/21500/21526_1_360px.jpg",
					"subtitle": "Elegant appreciation box set",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "c_letter"
					}]
				},
				{
					"title": "Christmas Book",
					"image_url": "https://www.uncommongoods.com/images/items/42900/42986_1_360px.jpg",
					"subtitle": "Personalized Night Before Christmas book",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "c_book"
					}]
				},
				{
					"title": "Let it Glow Lamp",
					"image_url": "https://www.uncommongoods.com/images/items/45900/45954_1_360px.jpg",
					"subtitle": "Handcrafted leafy glow lamp",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "c_lamp"
					}]
				}
			]
		}
	}
};

const c_letter = {

	"text": "Do you wish to choose A Year of Gratitude?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "c_letter_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const c_letter_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose A Year of Gratitude for a Christmas gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.uncommongoods.com/product/a-year-of-gratitude",
				"title": "See More Details"
			}]
		}
	}
};

const c_book = {

	"text": "Do you wish to choose Christmas Book?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "c_book_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const c_book_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Personalized Christmas Book for a Christmas gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.uncommongoods.com/product/personalized-night-before-christmas-book",
				"title": "See More Details"
			}]
		}
	}
};

const c_lamp = {

	"text": "Do you wish to choose Glow Lamp?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "c_lamp_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const c_lamp_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Leafy Glow Lamp for a Christmas gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.uncommongoods.com/product/let-it-glow-lamp",
				"title": "See More Details"
			}]
		}
	}
};

const p_wedding = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "generic",
			"elements": [
				{
					"title": "Wooden Box",
					"image_url": "https://www.artifactuprising.com/media/catalog/product/cache/image/560x560/e9c3970ab036de70892d86c6d221abfe/w/o/wood-box-main01-wedding-couple_2x.jpg",
					"subtitle": "Personalized wooden box with text or image",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "w_box"
					}]
				},
				{
					"title": "Wine Glass Set",
					"image_url": "https://www.markandgraham.com/mgimgs/rk/images/dp/wcm/201739/0034/teardrop-stemless-wine-glass-set-of-4-1-t.jpg",
					"subtitle": "Teardrop stemless wine glass, set of 4",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "w_wine"
					}]
				},
				{
					"title": "Robe",
					"image_url": "https://media.restorationhardware.com/is/image/rhis/prod8390035_E48408926_F?$l-pd1$&wid=650",
					"subtitle": "Textured-weave cotton robe with plush terry lining",
					"buttons": [{
						"type": "postback",
						"title": "Choose This Gift",
						"payload": "w_robe"
					}]
				}
			]
		}
	}
};

const w_box = {

	"text": "Do you wish to choose a Wooden Box?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "w_box_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const w_box_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose a Personalized Wooden Box for a Wedding gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.artifactuprising.com/photo-gifts/wooden-box-for-photos",
				"title": "See More Details"
			}]
		}
	}
};

const w_wine = {

	"text": "Do you wish to choose Wine Glass Set?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "w_wine_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const w_wine_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Wine Glass Set for a Wedding gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.markandgraham.com/products/teardrop-stemless-wine-glass/?pkey=cpersonalized-wedding-gifts&isx=0.0.3000",
				"title": "See More Details"
			}]
		}
	}
};

const w_robe = {

	"text": "Do you wish to choose Robes?",
	"quick_replies": [
	  {
	  	"content_type": "text",
	  	"title": "Yes!",
	  	"image_url": yes_url,
	  	"payload": "w_robe_y"
	  }, {
	  	"content_type": "text",
	  	"title": "No",
	  	"image_url": no_url,
	  	"payload": "no"
	  }
	]
};

const w_robe_y = {

	"attachment": {
		"type": "template",
		"payload": {
			"template_type": "button",
			"text": "You chose Robes for a Wedding gift!",
			"buttons": [{
				"type": "web_url",
				"url": "https://www.restorationhardware.com/catalog/product/product.jsp?productId=prod8390035&categoryId=cat1500036",
				"title": "See More Details"
			}]
		}
	}
};

const no = {

	"text": "You can change your gift option anytime you want from the menu below."
};

const nlp_greeting = [

	'Hi!',
	'Hello!',
	'Hi, good to see you!',
	'Hello, welcome to Gifty!'
];

const nlp_thanks = [

	'You are very welcome.',
	'No problem.',
	'My pleasure.',
	'Not at all.'
];

const nlp_bye = [
	
	'Goodbye, I hope to see you later!',
	'Have a good one!',
	'Bye-bye.',
	'Take care!'
];

const nlp_else = [

	'That\'s interesting.',
	'That\'s nice.',
	'Can you elaborate on that?'
];

module.exports = {
	getStarted: getStarted,
	persistentMenu: persistentMenu,
	greeting: greeting,
	whitelisted: whitelisted,
	p_getStarted: p_birthday,
	p_birthday: p_birthday,
	b_cake: b_cake,
	b_cake_y: b_cake_y,
	b_coffee: b_coffee,
	b_coffee_y: b_coffee_y,
	b_giftbox: b_giftbox,
	b_giftbox_y: b_giftbox_y,
	p_christmas: p_christmas,
	c_letter: c_letter,
	c_letter_y: c_letter_y,
	c_book: c_book,
	c_book_y: c_book_y,
	c_lamp: c_lamp,
	c_lamp_y: c_lamp_y,
	p_wedding: p_wedding,
	w_box: w_box,
	w_box_y: w_box_y,
	w_wine: w_wine,
	w_wine_y: w_wine_y,
	w_robe: w_robe,
	w_robe_y: w_robe_y,
	no: no,
	nlp_greeting: nlp_greeting,
	nlp_thanks: nlp_thanks,
	nlp_bye: nlp_bye,
	nlp_else: nlp_else
};