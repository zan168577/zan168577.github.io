FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});
let day = 0;
let mon = 0;

$(function () {

  $("#start").click(function () {

    day = $("#daybox").val();
    mon = $("#monbox").val();
    let date = "2017-" + mon + "-" + day + " 09:59:00";
    FB.api(
      '/approprie/posts',
      'GET', {
        "since": date,
        "limit": "1"
      },
      function (response) {
        // Insert your code here
        console.log(response);
      }
    );
  });


});