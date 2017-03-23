window.fbAsyncInit = function() {
    FB.init({
      appId      : '1845583559041249',
      xfbml      : true,
      version    : 'v2.8',
      status     :true
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=1845583559041249";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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

