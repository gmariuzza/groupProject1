$(document).on("ready", function(){
console.log("www");
var type = "";
var randomTrump;
var fakeNames = ["Barack Obama", "Hillary Clinton", "Jeb Bush", "James Comey"];

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
		  //after data comes back from the request
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
		  //after data comes back from the request
		  .done(function(response){
		  	console.log(response);
		  	type = "quote";
		  	$("#quoteHere").html(response.message);

		  });

		  

	};



$("#generate").on("click", function(event) {

	event.preventDefault();

	randomTrump = ranNumber(0,2);

	if (randomTrump === 0){

		fakeQuotes();

	}else if (randomTrump === 1) {
		quotes();
	}
	else{
		console.log("trump rules");
	};

});




$("#fake").on("click", function(event) {

	event.preventDefault();
	  

		});

});








			

