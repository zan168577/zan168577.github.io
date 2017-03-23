FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});

$(function () {

  $("#start").click(function () {
contentSearch();
    
  });
function contentSearch(){
  FB.api(
      '/approprie/posts',
      'GET', {
        "since": "2017-03-22 09:59:00",
        "limit": "1"
      },
      function (response) {
        let textid=response.data[0].id;
        console.log(textid,response);
      }
    );
}

});