$(document).ready(function() {
  // Create global variables including those to hold responses to questions
  var friendName = "";
  var currentMatchPoints = 0;
  var newFriendObj;
  var q01Answer = 0;
  var q02Answer = 0;
  var q03Answer = 0;
  var q04Answer = 0;
  var q05Answer = 0;
  var q06Answer = 0;
  var responses = [];


  // Create an object constructor to generate a user with responses
  var friendProfile = function(name, responseObj) {
    this.name = name;
    this.responseObj = responseObj;
  };


  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    friendName = $("#first_name").val().trim();
    console.log(friendName);

    q01Answer = $('input[name="question1"]:checked').val();
    console.log(q01Answer);
    q02Answer = $('input[name="question2"]:checked').val();
    console.log(q02Answer);
    q03Answer = $('input[name="question3"]:checked').val();
    console.log(q03Answer);
    q04Answer = $('input[name="question4"]:checked').val();
    console.log(q04Answer);
    q05Answer = $('input[name="question5"]:checked').val();
    console.log(q05Answer);
    q06Answer = $('input[name="question6"]:checked').val();
    console.log(q06Answer);

    // Add responses to the Responses array
    responses.push(q01Answer, q02Answer, q03Answer, q04Answer, q05Answer,
      q06Answer);

    // Create a object for the friend using the constructor created above
    newFriendObj = new friendProfile(friendName, responses);
    console.log(newFriendObj);
    console.log(newFriendObj.responseObj);

    // Reset the friend finder form
    $("#questionForm")[0].reset();

    matchFriends(newFriendObj);
    // });
  });

  //Code below houses the matching logic to pair the new user with an existing user
  function matchFriends(newFriendObj) {
    var currentURL = window.location.origin;

    //Ajax call to temp, local existing user database
    $.ajax({
      url: "/api/users",
      method: "GET"
    })
    .done(function(friends){
      console.log(friends);

      //This for outer loop, loops through the count users in the local db
      for (var i = 0; i < friends.length; i++) {
        currentMatchPoints = 0;
        console.log("Where we are in the i loop: ", i);
        //This for inner loop, loops through the first three question answers
        for (var j = 0; j < 3; j++) {
          if (newFriendObj.responseObj[j] === friends[i].responseObj[j]) {
            currentMatchPoints = currentMatchPoints + 1;
          }
          console.log("Current points coming out of j loop: ", currentMatchPoints);
          console.log("Where we are in the j loop: ", j);
        }
        //This for inner loop, loops through the last three question answers
        for (var k = 3; k < 6; k++) {
          if (newFriendObj.responseObj[k] !== friends[i].responseObj[k]) {
            currentMatchPoints = currentMatchPoints + 1;
          }
          console.log("Current points coming out of k loop: ", currentMatchPoints);
          console.log("Where we are in the k loop: ", k);
        }

      }
    });

  }

});
