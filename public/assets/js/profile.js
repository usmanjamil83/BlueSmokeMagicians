$(document).ready(function() {
  $('select').material_select();

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();



    // Capture the form inputs
    $("#submit_btn").on("click", function(e){
      e.preventDefault();
      // Form validation
      function validateForm() {
      var isValid = true;
      // $('.validate').each(function() {
      //   if ( $(this).val() === '' )
      //       console.log('Did not populate: ' + $(this));
      //       isValid = false;
      // });

      $('.chosen-select').each(function() {

        if( $(this).val() === "")
          isValid = false
      })
      return isValid;
    }

    // If all required fields are filled
    if (validateForm() == true)
    {
      // Create an object for the user's data
        var userData = {
          // img: $("img"),
          name: $("#name").val(),
          quote: $("#quote").val(),
          gender: $("#gender").val(),
          image: $("#image").val(),
          age: $("#age").val()
        };


        // Grab the URL of the website
        var currentURL = window.location.origin;
        console.log("Endpoint: " + currentURL + "/api/blah");
        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/users", userData, function(data){
          console.log("dbnvfata: " + data.name);

          // $("#name").text(data.name);
          // $('#name').attr("src", data.image);



        });
    }
    else
    {
      alert("Please fill out all fields before submitting!");
    }

      return false;
    });


});
