//Code below grabs the URL and extracts the search value
//In this instance the search value is the user identified from the swipe activity
var parser = document.createElement('a');
parser.href = window.location.href;

console.log(window.location.href);
console.log(parser.search);

//Code below parses our the splices out just the search term
var searchString = parser.search;
var slicedSearchString = searchString.slice(1);
console.log(slicedSearchString);


//Code below will write user info onto the package
$("#userNameCard").html("User [" + slicedSearchString + "]");

// socket.io chat js

$(function () {
	var socket = io();
	$('form').submit(function(){
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		return false;
	});
	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
		window.scrollTo(0, document.body.scrollHeight);
	});
});

// socket.io chat js