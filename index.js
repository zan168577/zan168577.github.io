FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


$(function() {
  $("#start").click(function(){
      FB.api(
      '/approprie/posts',
      'GET',
      {"since":"2017-03-22 09:59:00","limit":"1"},
      function(response) {
      // Insert your code here
        console.log(response);
      }
    );
  });
});

