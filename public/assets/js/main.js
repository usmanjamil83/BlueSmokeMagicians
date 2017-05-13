/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
    },
	// like callback
    onLike: function (item) {

			// window.location.replace("../public/matches.html"+"?id=5");
			console.log(item);

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

$('#paneOne').css(
	{'background': 'url("../public/assets/img/pane/jobs.png") no-repeat scroll center center'}
);
