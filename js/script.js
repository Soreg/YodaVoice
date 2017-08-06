// Initiate when document is loaded
$(document).ready(function(){

  // On button click..
    $("form li").click(function(){
        // Store value of input
        let input = $("form textarea").val();
        input = input.split(" ").join("+");

        // Fetch API and combine it with the message
        $.ajax({
          url: 'https://yoda.p.mashape.com/yoda?sentence='+input, // The URL to the API. You can get this in the API page of the API you intend to consume
          type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
          data: {}, // Additional parameters here
          // On success, do ...
          success: function(data) {
            // Replace output with the returned string, and add fadeout / fadein effect
            $('#output').fadeOut('normal', function() {
              $('#output').html(data);
              $('#output').fadeIn('normal');
            });
          },
          error: function(err) {
            console.log(err);
          },
          beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "RvfMavrOilmshjCMT6UYuicQqViCp1neoHbjsnkXlyf9Ir7mzL"); // Enter here your Mashape key
          }
        });

    });
});
