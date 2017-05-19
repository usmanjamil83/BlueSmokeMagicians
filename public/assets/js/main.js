//Code below grabs the URL and extracts the search value that contains user id
var parser = document.createElement('a');
parser.href = window.location.href;

//Code below parses our the splices out just the search term
var searchString = parser.search;
var slicedSearchString = searchString.slice(1);
var idOnly = searchString.slice(4);

getUserData(idOnly);

// Code below pulls in the user's information from the sql database
function getUserData(idOnly) {
$.get("/api/users/" + idOnly, function(newUserData) {
	if (newUserData) {
		// If this post exists, prefill our cms forms with its data
		console.log(newUserData);
		getAllUserData();
	}
});
}

// Code below pulls in their top matches
function getAllUserData() {
	$.get("/api/users", function(data) {
		populatePanes(data);
		console.log("Descent should be here");
		console.log(data);
	});
}




/**
 * jTinder initialization
 */

// This function takes action when a match card is liked or disliked
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
    },
	// like callback
    onLike: function (item) {

			window.location("../contact"+"?"+item[0].id);
			console.log(item);
			console.log(item[0].id);

	    // set the status text
        $('#status').html('Like image ' + (item.index()+1));
				console.log("You liked this item!!!");
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});

// -----------------------------------------------------------------------------------------------------
// Code below contains js written by the team to compliment the code inherited from the jTinder package
// -----------------------------------------------------------------------------------------------------

// Declare a couple global variables
var imgArray = {};


// Code below populates the match cards with the matched user's information.
// It is written in a way to override the jTinder package's handling of this function in css
function populatePanes(data) {
	console.log(data);
	for (var i = 1; i < 6; i++) {
		console.log(data[i].name);
		var paneId = "#paneId" + i;
		var userInfo = "#userInfo" + i;
		console.log(paneId);
		console.log(userInfo);

		// This code adds the image to the pane
		$(paneId).css(
			{'background': 'url("./assets/img/pane/marissa_sm.jpg") no-repeat scroll center center',
			'background-size': 'cover',
			'background-size': '50%',
			'background-color': 'white'
			}
		);
		// This code adds the user info to the pane
		$(userInfo).css({
			'background-color':'white'
		});
		$(userInfo).html(data[i].name);
	}
}
