FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

$(function() {
    var token = "";

    $("#start").click(function() {
        token = $("#tokenbox").val();
        contentSearch();

    });

    function contentSearch() {
        FB.api(
            '/approprie/posts',
            'GET', {
                "since": "2017-03-22 09:59:00",
                "limit": "1",
                "access_token": token
            },
            function(response) {
                if (response.error) {
                    loging('尚未發文...');
                } else {
                    let textid = response.data[0].id;
                    loging('已搜尋到文章！準備留言！');
                }
                // contentComment(textid);
            }
        );
    }

    function contentComment(conid) {
        let apii = '/' + conid + '/comments';
        FB.api(
            apii,
            'POST', {
                "message": "+1",
                "access_token": token
            },
            function(response) {
                // Insert your code here
                if (response.id) {
                    loging('留言成功!');
                } else {
                    loging('再次嘗試...');
                }
            }
        );
    }

    function loging(msg) {
        let str = $("#loghere").text() + msg + '/n';
        $("#loghere").text(str);
    }
});