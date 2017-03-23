FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
let day=0,mon=0;

$(function() {
day=$("#daybox").val();
mon=$("#monbox").val();
let date="2017-"+mon+"-"+day+" 09:59:00";
  $("#start").click(function(){
      FB.api(
      '/approprie/posts',
      'GET',
      {"since":date,"limit":"1"},
      function(response) {
      // Insert your code here
        console.log(response);
      }
    );
  });


});

