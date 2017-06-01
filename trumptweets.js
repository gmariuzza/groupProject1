$(document).on("ready", function(){
	console.log("www");
	var type = "";
	var randomTrump;
	var fakeNames = ["Barack Obama", "Hillary Clinton", "Jeb Bush", "James Comey"];
	var tweets = [];
	var searchTerm = ["Hillary", "Mexico", "Obama", "Money", "Immigrants"];
	var tweetArray;

	for (var i = 0; i < searchTerm.length; i++) {
		$.ajax({
			url: "https://matchilling-tronald-dump-v1.p.mashape.com/search/quote?query=" + searchTerm[i] + "&page=The+page+number&size=25'",

        	// The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        	data: {}, // Additional parameters here
        	dataType: 'json',
        	success: function(data) {
        	},
        	error: function(err) { console.log("error", err); },
        	beforeSend: function(xhr) {
        	xhr.setRequestHeader("X-Mashape-Authorization", "Y3uBFDenHumshrBSTtJm0yC7jf9Sp1Ri5m2jsnCHgHAwZg3rgv"); // Enter here your Mashape key
        	}
			})
 		.done(function(data) {     
		    console.log(data);
			for (var  i = 0; i < data.count; i++ ) {
				var tweetArray = data._embedded.quotes[i].value;
		      	if ("undefined" === typeof tweetArray) {
		      			console.log("undefined");
		      	} else {
		      			tweets.push(tweetArray);
			      	}
		    }}); 	
 	}

	function ranNumber(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	};

	function fakeQuotes(){
		$("#quoteHere").empty();
		//creating varibale to store the food name for query
		//var quoteTweet = $(this).
		  
		//setting up the queryURL for the ajax request

		var ranIndex = ranNumber(0,fakeNames.length - 1);
		var q = fakeNames[ranIndex];

		var fakeUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=" + q;
		  
		//preforming an AJAX request with the QueryURL
		$.ajax({
			url: fakeUrl,
			method: "GET"
		})
		.done(function(response1){
		  	console.log(response1);
		  	type = "fake";
		  	$("#quoteHere").html(response1.message);
		});
	};

	function quotes(){
		$("#quoteHere").empty();
		  
		//creating varibale to store the food name for query
		//var quoteTweet = $(this).
		  
		//setting up the queryURL for the ajax request
		var quoteUrl =  "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
		  
		//preforming an AJAX request with the QueryURL
		$.ajax({
			url: quoteUrl,
			method: "GET"
		})
		.done(function(response){
		  	console.log(response);
		  	type = "quote";
		  	$("#quoteHere").html(response.message);
		});
	};  

	function tweet() {
		$("#quoteHere").empty();
		type = "tweet";
		var randomQuote = Math.floor((Math.random() * tweets.length) + 1);
		console.log(tweets[randomQuote]);
		$("#quoteHere").html(tweets[randomQuote]);  
	};


	$("#generate").on("click", function(event) {
		event.preventDefault();

		randomTrump = ranNumber(0,3);
		console.log(randomTrump);

		if (randomTrump === 0){
			fakeQuotes();
		} else if (randomTrump === 1) {
			quotes();
		}
		else {
			tweet();
		};

	});

	$("#fake").on("click", function(event) {
		event.preventDefault();
	});

});








			

