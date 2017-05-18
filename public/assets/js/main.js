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

			window.location.replace("../contact"+"?"+item[0].id);
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
function populatePanes() {
	for (var i = 1; i < 6; i++) {
		var paneId = "#paneId" + i;
		var userInfo = "#userInfo" + i;
		console.log(paneId);
		console.log(userInfo);

		// This code adds the image to the pane
		$(paneId).css(
			{'background': 'url("../public/assets/img/pane/jobs_img.png") no-repeat scroll center center',
			'background-size': 'cover',
			'background-size': '50%',
			'background-color': 'white'
			}
		);
		// This code adds the user info to the pane
		$(userInfo).css({
			'background-color':'white'
		});
		$(userInfo).html("User Name<br>"+ "User Quote<br>"+"User Dev Preferences<br>");
	}
}

// Run the function to populate panes on load
populatePanes();
