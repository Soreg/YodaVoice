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
          success: function(data) {
            console.log(data);
          },
          error: function(err) {
            console.log(err);
          },
          beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "I0rXIJWDosmsh4cTLGANJS83Q9FJp1eVrNBjsnPeqOoCBNwIPk"); // Enter here your Mashape key
          }
        });

    });
});
