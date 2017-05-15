$(document).ready(function() {
  // Create global variables including those to hold responses to questions
  var friendName = "";
  var currentMatchPoints = 0;
  var q01Answer = 0;
  var q02Answer = 0;
  var q03Answer = 0;
  var q04Answer = 0;
  var q05Answer = 0;
  var q06Answer = 0;
  var responses = [];


  // Create an object constructor to generate a user with responses
  var friendProfile = function(name, picture, responseObj) {
    this.name = name;
    this.responseObj = responseObj;
  };


  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    friendName = $("#first_name").val().trim();
    console.log(friendName);

    var quest1 = $('input[name="question1"]:checked').val();
    console.log(quest1);

    // q01Answer = parseInt($("#q01").val().trim());
    // q02Answer = parseInt($("#q02").val().trim());
    // q03Answer = parseInt($("#q03").val().trim());
    // q04Answer = parseInt($("#q04").val().trim());
    // q05Answer = parseInt($("#q05").val().trim());
    // q06Answer = parseInt($("#q06").val().trim());
    //
    // // Add responses to the Responses array
    // responses.push(q01Answer, q02Answer, q03Answer, q04Answer, q05Answer,
    //   q06Answer);
    //
    // // Create a object for the friend using the constructor created above
    // newFriendObj = new friendProfile(friendName, imageLink, responses);
    // console.log(newFriendObj);
    // console.log(newFriendObj.responseObj);
    //
    // // Reset the friend finder form
    // $("#friendForm")[0].reset();
    // findFriend(newFriendObj);
    // });





  });
});
