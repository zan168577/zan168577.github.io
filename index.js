FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});

$(function () {
var token="";

  $("#start").click(function () {
    token=$("#tokenbox").val();
    contentSearch();

  });

  function contentSearch() {
    FB.api(
      '/approprie/posts',
      'GET', {
        "since": "2017-03-22 09:59:00",
        "limit": "1",
        "access_token":token
      },
      function (response) {
        let textid = response.data[0].id;
        console.log(textid, response);
        contentComment(textid);
      }
    );
  }

  function contentComment(conid) {
    let apii = '/' + conid + '/comments';
    FB.api(
      apii,
      'POST', {
        "message": "+1",
        "access_token":token
      },
      function (response) {
        // Insert your code here
        if(response.id){
          alert('留言成功!');
        }
      }
    );
  }

});