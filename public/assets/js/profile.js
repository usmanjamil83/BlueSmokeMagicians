$(document).ready(function() {
    $('select').material_select();

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();

    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit-button").on("click", function(e){
      e.preventDefault();
      console.log('test');
      // Form validation
      function validateForm() {
      var isValid = true;
      $('.validate').each(function() {
        if ( $(this).val() === '' )
            isValid = false;
      });

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
          gender: [$("#Agender").val(), $("#Androgynous").val(), $("#Female").val(), $("#Male").val(), $("#Pangender").val(),
          $("#Transgender").val(), $("#Transsexual").val()]
        }


        // Grab the URL of the website
        var currentURL = window.location.origin;

        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/", userData, function(data){
          console.log("data: " + data.name);
          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#match-name").text(data.name);
          $('#match-image').attr("src", data.image);

          // Show the modal with the best match
          $("#resultsModal").modal('toggle');

        });
    }
    else
    {
      alert("Please fill out all fields before submitting!");
    }

      return false;
    });


});
